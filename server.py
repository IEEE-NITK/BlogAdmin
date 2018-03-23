from gevent import monkey
import json
from flask import Flask, request, Response, render_template, abort, url_for, jsonify
import gevent
from sklearn.externals import joblib
from flask_httpauth import HTTPDigestAuth
import pandas as pd
import traceback

# Flask Variables
app = Flask(__name__)

clf_pred=joblib.load('models/models_pred.pk')
clf_exp=joblib.load('models/models_exp.pk')


monkey.patch_all()

auth = HTTPDigestAuth()

app.config['SECRET_KEY'] = 'IEEE NITK'

users = {
    "akshay": "revankar",
    "salman": "shah",
    "hrishi": "hiraskar"
}

# Authenticating users from Dictionary


@auth.get_password
def get_pw(username):
    if username in users:
        return users.get(username)
    return None


@app.route('/')
@auth.login_required
def index():
    return render_template('index.html')


# Main Method in the Server code
if __name__ == '__main__':
    # Set server address 0.0.0.0:5000/
    app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)