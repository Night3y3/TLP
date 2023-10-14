from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField

class RegisterForm(FlaskForm):
    firstname= StringField(label='username')
    middlename= StringField(label='username')
    lastname= StringField(label='username')
    address1= StringField(label='username')
    address2= StringField(label='username')
    email_address= StringField(label='email')
    
    submit=SubmitField(label='submit')