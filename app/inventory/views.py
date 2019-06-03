from flask import render_template, url_for, redirect, flash, request, json, jsonify
from . import inventory
import os
import datetime
from forms import InventoryForm
from flask_login import login_required
from werkzeug import secure_filename

from app import db
from ..models import Inventory, Serializer


@inventory.route('/save_item', methods=['GET', 'POST'])
@login_required
def save_item():
    """
    Add an item
    """
    if request.method == 'POST':
        pid = request.form.get('pid')
        name = request.form.get('name')
        description = request.form.get('description')
        code = request.form.get('code')
        material = request.form.get('material')
        price = request.form.get('price')
        quantity = request.form.get('quantity')
        perbox = request.form.get('perbox')
        location = request.form.get('location')
        file = request.form.get('file')
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
    name = request.form.get('name')
    description = request.form.get('description')
    code = request.form.get('code')
    material = request.form.get('material')
    price = request.form.get('price')
    quantity = request.form.get('quantity')
    perbox = request.form.get('perbox')
    location = request.form.get('location')
    file = request.form.get('file')

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


