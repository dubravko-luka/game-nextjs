import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import windowReducer from './reducers/windowReducer';
import screenReducer from './reducers/screenReducer';
import imageReducer from './reducers/imageReducer';
import knapsackReducer from './reducers/knapsackReducer';
import cardReducer from './reducers/cardReducer';
import shopReducer from './reducers/shopReducer';
import mailboxReducer from './reducers/mailboxReducer';
import settingReducer from './reducers/settingReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  screen: screenReducer,
  image: imageReducer,
  knapsack: knapsackReducer,
  card: cardReducer,
  shop: shopReducer,
  mailbox: mailboxReducer,
  setting: settingReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
