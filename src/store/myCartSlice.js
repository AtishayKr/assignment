import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const myCartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload);
    },
    remove: (state, action) => {
      state.value = state.value.filter(item => item != action.payload);
    }
  }
});

export const {add, remove} = myCartSlice.actions;
export default myCartSlice.reducer;
