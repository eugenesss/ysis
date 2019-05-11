from flask import render_template, url_for, redirect, flash, request, json, jsonify
from . import inventory
from forms import InventoryForm
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
        pid = request.form.get('pid')
        name = request.form.get('name')
        price = request.form.get('price')
        quantity = request.form.get('quantity')
        item = Inventory(pid, name, price, quantity)
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
    price = request.form.get('price')
    quantity = request.form.get('quantity')

    # update changes
    item.name = name
    item.price = price
    item.quantity = quantity
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




