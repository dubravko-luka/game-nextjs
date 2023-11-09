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
import allyReducer from './reducers/allyReducer';
import enemyReducer from './reducers/enemyReducer';
import attackDefenseReducer from './reducers/attackDefenseReducer';
import webSocketReducer from './reducers/webSocketReducer';

const rootReducer = combineReducers({
	window: windowReducer,
	screen: screenReducer,
	image: imageReducer,
	knapsack: knapsackReducer,
	card: cardReducer,
	shop: shopReducer,
	mailbox: mailboxReducer,
	setting: settingReducer,
	ally: allyReducer,
	enemy: enemyReducer,
	attackDefense: attackDefenseReducer,
	webSocket: webSocketReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
