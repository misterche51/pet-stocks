import { newsReducer } from '../reducers/news';
import { cryptoReducer } from '../reducers/crypto';
import { modalReducer } from '../reducers/modal';
import { currencyReducer } from '../reducers/currency';
import { createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const reducers = {
  news: newsReducer,
  crypto: cryptoReducer,
  currency: currencyReducer,
  modal: modalReducer,
};
const reducer = combineReducers(reducers);

export default function configureStore(initialState) {
  return createStore(
      reducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(thunk)
      )
  );
}