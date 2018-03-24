import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import calendar
import pickle
from sklearn.externals import joblib
from sklearn.svm import SVR

from sklearn.model_selection import GridSearchCV, RandomizedSearchCV
from sklearn.cross_validation import train_test_split
from sklearn.metrics import r2_score, mean_squared_error
from math import sqrt
from scipy.stats import randint as sp_randint
from scipy.stats import uniform as sp_uniform

bike_data = pd.read_csv("datasets/bike-sharing.csv")
# Pre-processing

X = bike_data[features.drop(['dteday'], ['instant'])]  # feature values
y = bike_data[target]  # corresponding targets
# test size is set to 0.25
X_train, X_test, y_train, y_test = train_test_split(X, y)
# svr = SVR()
# svr.fit(X_train, y_train)

# SVR tuned with RandomizesSearch
# may take a while!

# Parameters
param_dist = {'C': sp_uniform(1000, 10000),
              'kernel': ['linear']
              }

n_iter_search = 1

# MSE optimized
#SVR_tuned_RS = RandomizedSearchCV(SVR (C=1), param_distributions = param_dist, scoring = 'mean_squared_error', n_iter=n_iter_search)

# R^2 optimized
SVR_tuned_RS = RandomizedSearchCV(
    SVR(C=1), param_distributions=param_dist, scoring='r2', n_iter=n_iter_search)

# Fit
SVR_tuned_RS.fit(X_train, y_train)

# Best score and corresponding parameters.
print('best CV score from grid search: {0:f}'.format(SVR_tuned_RS.best_score_))
print('corresponding parameters: {}'.format(SVR_tuned_RS.best_params_))

# Predict and score
predict = SVR_tuned_RS.predict(X_test)

score_svr_tuned_RS = r2_score(y_test, predict)
rmse_svr_tuned_RS = sqrt(mean_squared_error(y_test, predict))

# SVR with RandomizesSearch - for casual users
# may take a while!

# Parameters
param_dist = {'C': sp_uniform(300, 3000),
              'kernel': ['linear']
              }

n_iter_search = 1

svr_tuned_cas_RS = RandomizedSearchCV(
    SVR(C=1), param_distributions=param_dist, scoring='r2', n_iter=n_iter_search)

# Fit
svr_tuned_cas_RS.fit(X_train_cas, y_train_cas)

# Best score and corresponding parameters.
print('best CV score from random search: {0:f}'.format(
    svr_tuned_cas_RS.best_score_))
print('corresponding parameters: {}'.format(svr_tuned_cas_RS.best_params_))

# Predict and score
predict = svr_tuned_cas_RS.predict(X_test)

score_SVR_tuned_RS = r2_score(y_test, predict)
rmse_SVR_tuned_RS = sqrt(mean_squared_error(y_test, predict))

