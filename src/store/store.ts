import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import windowReducer from './reducers/windowReducer';
import screenReducer from './reducers/screenReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  screen: screenReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
