from market import app
from flask import render_template,request
import mysql.connector
from market.models import Item
from market import db
from market.forms import RegisterForm

cnx = mysql.connector.connect(user='root',password=1234,
                            host='127.0.0.1',
                            database='dbmslol')


@app.route("/")
def home_page():
    return render_template("index.html")

@app.route('/register', methods=['GET','POST'])
def register_page():
    if(request.method=="POST"):
        fname=request.form.get["fname"]
        mname=request.form.get["mname"]
        lname=request.form.get["lname"]
        add1=request.form.get["add1"]
        add2=request.form.get["add2"]
        phno=request.form.get["phno"]
        gender=request.form.get["gender"]
        city=request.form.get["city"]
        pin=request.form.get["pin"]
        email=request.form.get["email"]
        dob=request.form.get["dob"]
        cnx.reconnect()
        cursor=cnx.cursor()
        cursor.execute("insert into demo2 values(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)",(fname,mname,lname,add1,add2,phno,gender,city,pin,email,dob))
      
        cnx.commit()
        cursor.close
        
    
    else:    
        return render_template('register.html',form=form)