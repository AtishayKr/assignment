import {combineReducers, legacy_createStore} from 'redux';
import {myCartReducer} from './myCartReducer';

export const configureStore = () => {
  let store = legacy_createStore(
    combineReducers({
      cart: myCartReducer
    })
  );

  return store;
};
