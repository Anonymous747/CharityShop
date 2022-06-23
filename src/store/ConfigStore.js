import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import {applyMiddleware, createStore} from 'redux';

const sagaMiddleware = createSagaMiddleware();

const configStore = initialState => {
  const middleware = applyMiddleware(thunk, sagaMiddleware);

  return createStore(rootReducer, initialState, middleware);
  // Why can't I use configureStore?
  // configureStore(rootReducer, initialState, middleware);
};

export default configStore;
