# DEM PUMPKINS: Emily Ortiz, Diana Akhmedova, May Qiu
# SoftDev
# K19 -- Sessions Greetings
# 2022-11-03
# time spent:  hours

from flask import Flask
from flask import render_template
from flask import request

from flask import session
import os

app = Flask(__name__) 

app.secret_key = os.urandom(32)
expected_user = "Elmo"
expected_pass = "1234"

@app.route("/")
def index():
    if 'username' in session: # if cookie is already in session
        response()
    return login()
    # return render_template( 'login.html' ) 


@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST': # user is logged in
        session['username'] = request.form['username'] # create a cookie w/ username
        return render_template( 'response.html' )
    
    

@app.route("/welcome", methods=['GET', 'POST'])
def response():
    return render_template( 'response.html', username=request.form.get('username'), method=request.method )


if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True
    app.run()


# def index():
#     if 'username' in session:
#         return f'Logged in as {session["username"]}'
#     return 'You are not logged in'


# if cookie alr :
#     go to welcome page
# if no cookie:
#     have user fill out login form
#     if login correct:
#         create cookie
#         go to welcome page
#     else (login wrong):
#         tell user that