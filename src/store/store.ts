import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import windowReducer from './reducers/windowReducer';
import screenReducer from './reducers/screenReducer';
import imageReducer from './reducers/imageReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  screen: screenReducer,
  image: imageReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
