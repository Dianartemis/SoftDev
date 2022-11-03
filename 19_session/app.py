# DEM PUMPKINS: Emily Ortiz, Diana Akhmedova, May Qiu
# SoftDev
# K19 -- Sessions Greetings
# 2022-11-03
# time spent:  hours

from flask import session
import os

from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__) 

app.secret_key = os.urandom(32)

@app.route('/')
def login():
    return (login.html)
