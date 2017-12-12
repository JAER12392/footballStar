import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
//import MainReducer from '../reducers/main-reducer';
import RootReducer from '../reducers/root_reducer';
const configureStore = (preloadedState = {}) => (
  createStore(
    MainReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
  )
);

export default configureStore;
