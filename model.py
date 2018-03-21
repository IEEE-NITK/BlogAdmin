import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import calendar
import pickle
from sklearn.externals import joblib
from sklearn.svm import SVR
#from tensorflow.contrib import skflow

from sklearn.model_selection import GridSearchCV, RandomizedSearchCV
from sklearn.cross_validation import train_test_split
from sklearn.metrics import r2_score, mean_squared_error
from math import sqrt
from scipy.stats import randint as sp_randint
from scipy.stats import uniform as sp_uniform

def build_train():

	bike_data = pd.read_csv("datasets/bike-sharing.csv")
	features = bike_data.columns[:-3]
	target = bike_data.columns[-1]
	X = bike_data[features.drop(['dteday'],['instant'])] # feature values 
	y = bike_data[target]
	X_train, X_test, y_train, y_test = train_test_split(X, y)
	svr = SVR()
	svr.fit(X_train, y_train)
	svr_pred = svr.predict(X_test)

	score_svr = r2_score(y_test, svr_pred)
	rmse_svr = sqrt(mean_squared_error(y_test, svr_pred))
	print(y_test)
	return(svr_pred,y_test)

if __name__ == '__main__':
	svr_pred,y_test = build_train()

	filename = 'models_pred.pk'
	with open('models/'+filename, 'wb') as file:
		pickle.dump(y_test, file)
	filename_ex = 'models_exp.pk'
	with open('models/'+filename_ex, 'wb') as file:
		pickle.dump(svr_pred, file)
