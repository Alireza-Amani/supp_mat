#!Python
from sklearn.ensemble import RandomForestRegressor

nj = 22 # numer of CPU cores to use
seed = 1915 # random seed 

# Random Forest instance
rf = RandomForestRegressor(n_jobs=nj, verbose=1, random_state=seed)
rf_tuned_hyperparameters = {
    "n_estimators" : 100,
    "max_features" : 3,
    "max_samples" : 0.05,
    "min_samples_leaf" : 3}
rf.set_params(**rf_tuned_hyperparameters)
rf.fit(X_train, y_train) # model is ready to be fit on training set