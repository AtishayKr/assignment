export const myCartReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'remove':
      return state.filter(item => item != action.payload);
    default:
      return state;
  }
};
