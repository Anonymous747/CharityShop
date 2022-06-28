import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './sagas';

import {applyMiddleware, createStore} from 'redux';

const sagaMiddleware = createSagaMiddleware();

const configStore = initialState => {
  const middleware = applyMiddleware(thunk, sagaMiddleware);
  const store = createStore(rootReducer, initialState, middleware);

  sagaMiddleware.run(rootSaga);

  return store;
  // Why can't I use configureStore?
  // configureStore(rootReducer, initialState, middleware);
};

export default configStore;
