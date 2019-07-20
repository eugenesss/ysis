from flask import request, json, jsonify
from . import category

from flask_jwt_extended import jwt_required

from app import db
from ..models import Category, CategorySchema

category_schema = CategorySchema()


@category.route('/add_category', methods=['POST'])
@jwt_required
def add_warehouse():
    data = request.data
    data_js = json.loads(data)
    cid = data_js.get('cid')
    name = data_js.get('c_name')

    cat = Category(cid, name)
    db.session.add(cat)
    db.session.commit()
    return category_schema.jsonify(Category.query.get(cat.cid))


@category.route('/update_category', methods=['POST', 'GET'])
@jwt_required
def update_warehouse():
    data = request.data
    data_js = json.loads(data)
    wid = data_js.get('wid')
    # Read the JSON data
    if request.method == 'POST':
        cid = data_js.get('cid')
        c_name = data_js.get('c_name')

        # Get the warehouse from database
        cat = Category.query.get_or_404(wid)

        # Update the values
        cat.cid = cid
        cat.c_name = c_name

        # Store in database
        db.session.commit()
        return category_schema.jsonify(Category.query.get(cat.cid))
    else:
        return category_schema.jsonify(Category.query.get(wid))


@category.route('/delete_category', methods=['DELETE'])
@jwt_required
def delete_warehouse():
    # Read the JSON data
    data = request.data
    data_js = json.loads(data)
    cid = data_js.get('cid')

    # Get the warehouse from database
    cat = Category.query.get_or_404(cid)
    db.session.delete(cat)
    db.session.commit()
    return jsonify("warehouse deleted"), 200


@category.route('/show_category', methods=['GET'])
@jwt_required
def show_warehouse():
    cat = Category.query.all()
    all_warehouse_schema = CategorySchema(many=True)
    return all_warehouse_schema.jsonify(cat), 200

