import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import globalReducer from './reducer';
import { rootReducer } from './reducer/app';

const middlewares = [thunk];
// @ts-ignore
const store = createStore(rootReducer,applyMiddleware(...middlewares));
// @ts-ignore
// const persistor = persistStore(store);

export {store};
