from flask import request, json, jsonify
from . import inventory
import os
import datetime

from flask_login import login_required
from app import db
from ..models import Inventory, Serializer


@inventory.route('/save_item', methods=['GET', 'POST'])
@login_required
def save_item():
    """
    Add an item
    """
    if request.method == 'POST':
        data = request.data
        data_js = json.loads(data)
        pid = data_js.get('pid')
        name = data_js.get('name')
        description = data_js.get('description')
        code = data_js.get('code')
        material = data_js.get('material')
        price = data_js.get('price')
        quantity = data_js.get('quantity')
        perbox = data_js.get('perbox')
        location = data_js.get('location')
        file = data_js.get('file')
        item = Inventory(pid, name, description, code, material, price, quantity, perbox, location, file, created_date=datetime.datetime.now())
        db.session.add(item)
        db.session.commit()
        return json.dumps(item.serialize()), 200

    if request.method == 'GET':
        return jsonify('Add a new item'), 200


@inventory.route("/show_items")
@login_required
def show_items():
    """
    Display all inventory
    """
    items = Inventory.query.all()
    return json.dumps(Inventory.serialize_list(items)), 200


@inventory.route("/update_item/<int:pid>", methods=['GET', 'POST'])
@login_required
def update_items(pid):
    """
    Update inventory
    """
    item = Inventory.query.get_or_404(pid)
    data = request.data
    data_js = json.loads(data)
    name = data_js.get('name')
    description = data_js.get('description')
    code = data_js.get('code')
    material = data_js.get('material')
    price = data_js.get('price')
    quantity = data_js.get('quantity')
    perbox = data_js.get('perbox')
    location = data_js.get('location')
    file = data_js.form.get('file')

    # update changes
    item.name = name
    item.description = description
    item.code = code
    item.material = material
    item.price = price
    item.quantity = quantity
    item.perbox = perbox
    item.location = location
    item.file = file
    item.updated_date = datetime.datetime.now()
    db.session.commit()

    return json.dumps(item.serialize()), 200


@inventory.route("/delete_item/<int:pid>", methods=['GET', 'POST'])
@login_required
def delete_items(pid):
    """
    Delete inventory
    """
    item = Inventory.query.get_or_404(pid)
    db.session.delete(item)
    db.session.commit()
    return jsonify("Item deleted"), 200


@inventory.route("/upload_image/<int:pid>", methods=['POST'])
@login_required
def upload_images(pid):
    """
    Upload images
    """
    pic = request.files['file']
    if pic.filename != '':
        pic_dir = os.path.join(os.path.abspath(os.curdir)) + "/", pic
        pic.save(pic_dir)

        item = Inventory.query.get_or_404(pid)
        item.filename = pic_dir
        db.session.commit()

    return jsonify('File uploaded successfully'), 200


