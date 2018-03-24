from gevent import monkey
import json
from flask import Flask, request, Response, render_template, abort, url_for, jsonify
import gevent
from sklearn.externals import joblib
from flask_httpauth import HTTPDigestAuth
import pandas as pd
import traceback
import numpy as np;

# Flask Variables
app = Flask(__name__)

clf_pred=joblib.load('models/models_pred.pk')
clf_exp=joblib.load('models/models_exp.pk')

svr_cas = joblib.load('models/models_new_cas.pk')
svr_reg = joblib.load('models/models_new_reg.pk')

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
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/')
@auth.login_required
def index():
    print(clf_exp, clf_pred)
    return render_template('index.html', name='Cycle Project',data1=clf_exp,data2=clf_pred)



@app.route('/predict', methods=['POST'])
def predict():
    print(request.json)
    features = request.json['data']
    features = np.array(features);
    features = features.reshape(1, -1)
    print(svr_cas.predict(features))
    r = {
        'y_cas': svr_cas.predict(features)[0],
        'y_reg': svr_reg.predict(features)[0]
    }
    return json.dumps(r)

# Main Method in the Server code
if __name__ == '__main__':
    # Set server address 0.0.0.0:5000/
    app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)
