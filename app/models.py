from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
from passlib.apps import custom_app_context as pwd_context

from app import db, login_manager
from sqlalchemy.inspection import inspect

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
        return Employee.query.get(int(user_id))


class Inventory(db.Model, Serializer):
    """
    Create an Inventory table
    """
    __tablename__ = 'inventory'
    pid = db.Column("pid", db.Integer, primary_key=True)
    name = db.Column("name", db.String(50))
    description = db.Column("description", db.String(150))
    code = db.Column("code", db.String(20))
    material = db.Column("material", db.String(50))
    price = db.Column("price", db.Integer)
    quantity = db.Column("quantity", db.Integer)
    perbox = db.Column("perbox", db.Integer)
    location = db.Column("location", db.String(50))
    file = db.Column("file", db.String(150))
    created_date = db.Column("created_date", db.DateTime)
    updated_Date = db.Column("updated_date", db.DateTime)

    def __init__(self, pid, name, description, code, material, price, quantity, perbox, location, file, created_date, updated_date):
        self.pid = pid
        self.name = name
        self.description = description
        self.code = code
        self.material = material
        self.price = price
        self.quantity = quantity
        self.perbox = perbox
        self.location = location
        self.file = file
        self.created_date = created_date
        self.updated_date = updated_date


class Loctite(db.Model, Serializer):
    """
    Create an Loctite table
    """
    __tablename__ = 'loctite'
    pid = db.Column("pid", db.Integer, primary_key=True)
    name = db.Column("name", db.String(50))
    description = db.Column("description", db.String(150))
    code = db.Column("code", db.String(20))
    price = db.Column("price", db.Integer)
    quantity = db.Column("quantity", db.Integer)
    batch = db.Column("batch", db.Integer)
    expiry_date = db.Column("expiry_date", db.DateTime)
    file = db.Column("file", db.String(150))
    created_date = db.Column("created_date", db.DateTime)
    updated_date = db.Column("updated_date", db.DateTime)

    def __init__(self, pid, name, description, code, price, quantity, batch, expiry_date, file, created_date, updated_date):
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
