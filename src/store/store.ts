import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import windowReducer from './reducers/windowReducer';
import screenReducer from './reducers/screenReducer';
import imageReducer from './reducers/imageReducer';
import knapsackReducer from './reducers/knapsackReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  screen: screenReducer,
  image: imageReducer,
  knapsack: knapsackReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
