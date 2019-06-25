from flask import flash, redirect, render_template, url_for, request, jsonify, Response, json
from flask_login import login_required, login_user, logout_user
import logging

from . import auth
from forms import LoginForm, RegistrationForm
from .. import db
from ..models import Employee


@auth.route('/register', methods=['GET', 'POST'])
def register():
    """
    Handle requests to the /register route
    Add an employee to the database through the registration form
    """
    form = RegistrationForm()
    if form.validate_on_submit():
        employee = Employee(email=form.email.data,
                            username=form.username.data,
                            first_name=form.first_name.data,
                            last_name=form.last_name.data,
                            password=form.password.data)

        # add employee to the database
        db.session.add(employee)
        db.session.commit()
        flash('You have successfully registered! You may now login.')

        # redirect to the login page
        return jsonify('successfully registered'), 200

    # load registration template
    return render_template('auth/register.html', form=form, title='Register')


@auth.route('/login', methods=['GET', 'POST'])
def login():
    #form = LoginForm()
    email = request.form.get('email')
    password = request.form.get('password')
    data = request.data
    dataDict = json.loads(data)
    email2 = dataDict.get('email')
    # check whether employee exists in the database and whether
    # the password entered matches the password in the database
    login_info = {}
    employee = Employee.query.filter_by(email=email2).first()
    if employee is not None and employee.verify_password(password):
        # log employee in
        login_user(employee)

        # redirect to the appropriate dashboard page
        #if employee.is_admin:
        login_info = {'email':employee.email, 'is_admin':True}

       # else:
         #   login_info = {'email':employee.email, 'first_name':employee.first_name, 'last_name':employee.last_name, 'is_admin':False}

    # when login details are incorrect
    #else:
     #   jsonify('Invalid email or password.')
    return jsonify(login_info)



@auth.route('/logout')
@login_required
def logout():
    """
    Handle requests to the /logout route
    Log an employee out through the logout link
    """
    logout_user()
    flash('You have successfully been logged out.')

    # redirect to the login page
    return redirect(url_for('auth.login'))
