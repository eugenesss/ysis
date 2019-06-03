from flask import render_template, url_for, redirect, flash, request, json, jsonify
from . import loctite
import datetime
import os
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
    description = request.form.get('description')
    code = request.form.get('code')
    price = request.form.get('price')
    quantity = request.form.get('quantity')
    batch = request.form.get('batch')
    expiry_date = request.form.get('expiry_date')
    file = request.form.get('file')
    created_date = request.form.get('created_date')
    updated_date = request.form.get('updated_date')
    if request.method == 'POST':
        item = Loctite(pid, name, description, code, price, quantity, batch, expiry_date, file, created_date, updated_date)
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
    pid = request.form.get('pid')
    name = request.form.get('name')
    description = request.form.get('description')
    code = request.form.get('code')
    price = request.form.get('price')
    quantity = request.form.get('quantity')
    batch = request.form.get('batch')
    expiry_date = request.form.get('expiry_date')
    file = request.form.get('file')

    # update changes
    item.name = name
    item.description = description
    item.code = code
    item.price = price
    item.quantity = quantity
    item.batch = batch
    item.expiry_date = expiry_date
    item.file = file
    item.updated_date = datetime.datetime.now()
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


@loctite.route("/upload_image/<int:pid>", methods=['POST'])
@login_required
def upload_images(pid):
    """
    Upload images
    """
    pic = request.files['file']
    if pic.filename != '':
        pic_dir = os.path.join(os.path.abspath(os.curdir)) + "/", pic
        pic.save(pic_dir)

        item = Loctite.query.get_or_404(pid)
        item.file = pic_dir
        db.session.commit()

    return jsonify('File uploaded successfully'), 200
