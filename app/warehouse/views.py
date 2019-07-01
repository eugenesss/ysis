from flask import request, json, jsonify
from . import warehouse

from flask_login import login_required

from app import db
from ..models import Warehouse, Serializer


@warehouse.route('/add_warehouse', methods=['POST'])
@login_required
def add_warehouse():
    data = request.data
    data_js = json.loads(data)
    wid = data_js.get('wid')
    name = data_js.get('name')
    location = data_js.get('location')

    wh = Warehouse(wid, name, location)
    db.session.add(wh)
    db.session.commit()
    return json.dumps(wh.serialize()), 200


@warehouse.route('/update_warehouse', methods=['POST'])
@login_required
def update_warehouse():
    # Read the JSON data
    data = request.data
    data_js = json.loads(data)
    wid = data_js.get('wid')
    name = data_js.get('name')
    location = data_js.get('location')

    # Get the warehouse from database
    wh = Warehouse.query.get_or_404(wid)

    # Update the values
    wh.wid = wid
    wh.name = name
    wh.location = location

    # Store in database
    db.session.commit()
    return json.dumps(wh.serialize()), 200


@warehouse.route('/delete_warehouse', methods=['DELETE'])
@login_required
def delete_warehouse():
    # Read the JSON data
    data = request.data
    data_js = json.loads(data)
    wid = data_js.get('wid')

    # Get the warehouse from database
    wh = Warehouse.query.get_or_404(wid)
    db.session.delete(wh)
    db.session.commit()
    return jsonify("warehouse deleted"), 200


@warehouse.route('/show_warehouse', methods=['GET'])
@login_required
def show_warehouse():
    wh = Warehouse.query.all()
    return json.dumps(Warehouse.serialize_list(wh)), 200

