import { newsReducer } from '../reducers/news';
import { cryptoReducer } from '../reducers/crypto';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

const reducers = {
  news: newsReducer,
  crypto: cryptoReducer
};
const reducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStore(
      reducer,
      initialState,
      applyMiddleware(thunk)
  );
}