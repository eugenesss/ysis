from flask import render_template, url_for, redirect, flash, request, json, jsonify
from . import loctite
from forms import LoctiteForm
from flask_login import login_required

from app import db
from ..models import Loctite, Serializer


@loctite.route('/save_loctite', methods=['GET', 'POST'])
@login_required
def save_item():
    """
    Add a loctite
    """

    pid = request.form.get('pid')
    name = request.form.get('name')
    price = request.form.get('price')
    quantity = request.form.get('quantity')
    if request.method == 'POST':
        item = Loctite(pid, name, price, quantity)
        db.session.add(item)
        db.session.commit()
        return json.dumps(item.serialize()), 200

    if request.method == 'GET':
        return jsonify('Add a new item'), 200


@loctite.route("/show_loctites")
@login_required
def show_items():
    """
    Display all loctite
    """
    items = Loctite.query.all()
    return json.dumps(Loctite.serialize_list(items)), 200


@loctite.route("/update_loctite/<int:pid>", methods=['GET', 'POST'])
@login_required
def update_items(pid):
    """
    Update loctite
    """
    item = Loctite.query.get_or_404(pid)
    name = request.form.get('name')
    price = request.form.get('price')
    quantity = request.form.get('quantity')

    # update changes
    item.name = name
    item.price = price
    item.quantity = quantity
    db.session.commit()

    return json.dumps(item.serialize()), 200


@loctite.route("/delete_loctite/<int:pid>", methods=['GET', 'POST'])
@login_required
def delete_items(pid):
    """
    Delete loctite
    """
    item = Loctite.query.get_or_404(pid)
    db.session.delete(item)
    db.session.commit()
    return jsonify("item deleted"), 200




