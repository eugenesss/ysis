import datetime

from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from passlib.apps import custom_app_context as pwd_context


from flask_marshmallow import fields, Schema

from app import db, login_manager, http_auth
import app
from sqlalchemy.inspection import inspect
from sqlalchemy.orm import relationship, backref
from sqlalchemy import ForeignKey

SECRET_KEY = 'p9342v<3Eid9%$i01'

class Serializer(object):

    def serialize(self):
        return {c: getattr(self, c) for c in inspect(self).attrs.keys()}

    @staticmethod
    def serialize_list(l):
        return [m.serialize() for m in l]


class Employee(UserMixin, db.Model, Serializer):
    """
    Create a User table
    """

    __tablename__ = 'employees'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(60), index=True, unique=True)
    username = db.Column(db.String(60), index=True, unique=True)
    first_name = db.Column(db.String(60), index=True)
    last_name = db.Column(db.String(60), index=True)
    password_hash = db.Column(db.String(128))
    is_admin = db.Column(db.Boolean, default=False)

    @property
    def password(self):
        """
        Prevent pasword from being accessed
        """
        raise AttributeError('password is not a readable attribute.')

    @password.setter
    def password(self, password):
        """
        Set password to a hashed password
        """
        #self.password_hash = generate_password_hash(password)
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        """
        Check if hashed password matches actual password
        """
        #return check_password_hash(self.password_hash, password)
        return pwd_context.verify(password, self.password_hash)

    def __repr__(self):
        return '<User: {}>'.format(self.username)

    # Set up user_loader
    @login_manager.user_loader
    def load_user(user_id):
        #return Employee.query.get(int(user_id))
        return Employee.query.get(int(user_id))


# @http_auth.verify_password
# def verify_password(username_or_token, password):
#     # Try to authenticate by Token
#     employee = Employee.verify_auth_token(username_or_token)
#     if not employee:
#         # try to authenticate with username/password
#         employee = Employee.query.filter_by(email=username_or_token).first()
#         if not employee or not employee.verify_password(password):
#             return False
#     g.employee = employee
#     return True


class Warehouse(db.Model, Serializer):
    """
    Create a Warehouse table
    """
    __tablename__ = 'warehouse'
    wid = db.Column("wid", db.Integer, primary_key=True)
    wh_name = db.Column("name", db.String(50))
    location = db.Column("location", db.String(100))

    def __init__(self, wid, wh_name, location):
        self.wid = wid
        self.wh_name = wh_name
        self.location = location

    @property
    def serialize(self):
        return {'wid': self.wid, 'name': self.wh_name, 'location': self.location}


class WarehouseSchema(Schema):
    """
    Inventory Schema
    """

    class Meta:
        # Fields to expose
        fields = ("wid", "wh_name", "location")
    # wid = fields.Int(dump_only=True)
    # wh_name = fields.String(dump_only=True)
    # location = fields.Str(dump_only=True)


class Category(db.Model, Serializer):
    """
    Create a Category table
    """
    __tablename__ = 'category'
    cid = db.Column("cid", db.Integer, primary_key=True)
    cat_name = db.Column("cat_name", db.String(50))

    def __init__(self, cid, cat_name):
        self.cid = cid
        self.cat_name = cat_name


class CategorySchema(Schema):
    """
    Inventory Schema
    """

    class Meta:
        # Fields to expose
        fields = ("cid", "cat_name")


class Inventory(db.Model, Serializer):
    """
    Create an Inventory table
    """
    __tablename__ = 'inventory'
    pid = db.Column("pid", db.Integer, primary_key=True)
    name = db.Column("name", db.String(50))
    description = db.Column("description", db.String(150))
    code = db.Column("code", db.String(100))
    material = db.Column("material", db.String(50))
    price = db.Column("price", db.Integer)
    quantity = db.Column("quantity", db.Integer)
    perbox = db.Column("perbox", db.Integer)
    location = db.Column("location", db.String(50))
    rack = db.Column("rack", db.String(50))
    unit_code = db.Column("unit_code", db.String(50))
    file = db.Column("file", db.String(150))
    created_date = db.Column("created_date", default=datetime.datetime.now())
    updated_date = db.Column("updated_date", db.DateTime)
    wid = db.Column('wid', db.Integer, ForeignKey('warehouse.wid'))
    cid = db.Column('cid', db.Integer, ForeignKey('category.cid'))
    warehouse = relationship("Warehouse", backref=db.backref("inventory", lazy='dynamic'))
    category = relationship("Category", backref=db.backref("inventory", lazy='dynamic'))


    def __init__(self, name, description, code, material, price, quantity, perbox, location, file,
                 wid, cid, rack, unit_code):
        self.name = name
        self.description = description
        self.code = code
        self.material = material
        self.price = price
        self.quantity = quantity
        self.perbox = perbox
        self.location = location
        self.file = file
        self.wid = wid
        self.cid = cid
        self.rack = rack
        self.unit_code = unit_code


class InventorySchema(Schema):
    """
    Inventory Schema
    """
    class Meta:
        # Fields to expose
        fields = ("wid", "wh_name", "pid", "name", "quantity", "description", "code", "price", "material", "perbox",
                  "location", "cid", "cat_name", "rack", "unit_code")


class UpdateInventorySchema(Schema):
    """
    Inventory Schema
    """

    class Meta:
        # Fields to expose
        fields = ("wid", "wh_name", "pid", "name", "quantity", "description", "code", "price", "material", "perbox",
                  "location", "cid", "cat_name", "rack", "unit_code")

    # wid = fields.Int(dump_only=True)
    # wh_name = fields.String(dump_only=True)
    # name = fields.Str(dump_only=True)
    # quantity = fields.Int(dump_only=True)
    # description = fields.Str(dump_only=True)
    # code = fields.Str(dump_only=True)
    # price = fields.Int(dump_only=True)
    # material = fields.String(dump_only=True)
    # perbox = fields.Int(dump_only=True)
    # location = fields.Str(dump_only=True)


class Loctite(db.Model, Serializer):
    """
    Create an Loctite table
    """
    __tablename__ = 'loctite'
    pid = db.Column("pid", db.Integer, primary_key=True)
    name = db.Column("name", db.String(50))
    description = db.Column("description", db.String(150))
    code = db.Column("code", db.String(100))
    price = db.Column("price", db.Integer)
    quantity = db.Column("quantity", db.Integer)
    batch = db.Column("batch", db.Integer)
    expiry_date = db.Column("expiry_date", db.DateTime)
    file = db.Column("file", db.String(150))
    created_date = db.Column("created_date", db.DateTime)
    updated_date = db.Column("updated_date", db.DateTime)
    wid = db.Column('wid', db.Integer, ForeignKey('warehouse.wid'))
    warehouse = relationship("Warehouse", backref=backref("loctite"))

    def __init__(self, pid, name, description, code, price, quantity, batch, expiry_date, file, created_date,
                 updated_date, wid):
        self.pid = pid
        self.name = name
        self.description = description
        self.code = code
        self.price = price
        self.quantity = quantity
        self.batch = batch
        self.expiry_date = expiry_date
        self.file = file
        self.created_date = created_date
        self.updated_date = updated_date
        self.wid = wid


def get_all_items():
    items = db.session.query(Warehouse.wid, Warehouse.wh_name, Inventory.pid, Inventory.name, Inventory.quantity,
                             Inventory.description, Inventory.code, Inventory.price, Inventory.material,
                             Inventory.perbox, Inventory.location, Inventory.rack, Inventory.unit_code, Category.cid,
                             Category.cat_name).filter(Inventory.wid == Warehouse.wid).filter(Category.cid == Inventory.cid).all()
    return items


def get_item(pid):
    item = db.session.query(Warehouse.wid, Warehouse.wh_name, Inventory.pid, Inventory.name, Inventory.quantity,
                            Inventory.description, Inventory.code, Inventory.price, Inventory.material,
                            Inventory.perbox, Inventory.location, Inventory.rack, Inventory.unit_code, Category.cid,
                            Category.cat_name).filter(Inventory.pid == pid).filter(Warehouse.wid == Inventory.wid).\
        filter(Category.cid == Inventory.cid).first()
    return item


def get_item_by_warehouse(wid):
    items = db.session.query(Warehouse.wid, Warehouse.wh_name, Inventory.pid, Inventory.name, Inventory.quantity,
                            Inventory.description, Inventory.code, Inventory.price, Inventory.material,
                            Inventory.perbox, Inventory.location, Inventory.rack, Inventory.unit_code, Category.cid,
                            Category.cat_name).filter(Inventory.wid == wid).filter(Category.cid == Inventory.cid).filter(Inventory.wid == Warehouse.wid).all()
    return items


# def get_all_items():
#     all_items = db.session.query(Warehouse.wid, Warehouse.wh_name, Inventory.name, Inventory.quantity,
#                                  Inventory.description, Inventory.code, Inventory.price, Inventory.material,
#                                  Inventory.perbox, Inventory.location).all()
#     return all_items
