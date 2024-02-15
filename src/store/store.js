// ................pure redux.....................

// import {combineReducers, legacy_createStore} from 'redux';
// import {myCartReducer} from './myCartReducer';
// export const configureStore = () => {
//   let store = legacy_createStore(
//     combineReducers({
//       cart: myCartReducer
//     })
//   );
//   return store;
// };

//...............redux Toolkit........................
import {configureStore} from '@reduxjs/toolkit';
import myCartSlice from './myCartSlice';
import cardDataSlice from './cardData';
export const store = configureStore({
  reducer: {
    cart: myCartSlice,
    cardData: cardDataSlice
  }
});
