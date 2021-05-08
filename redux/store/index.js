import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import global from '../reducers/global';
import moduleReducer from '../reducers/module';
import {globalSaga} from '../sagas/global';

const sagas = function* sagas() {
  yield* globalSaga();
};
const rootReducer = combineReducers({
  global: global,
  module: moduleReducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

// Exports
export {store};
