import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const fetchCardData = createAsyncThunk('card/fetchUserData', async () => {
  const response = await fetch('https://picsum.photos/v2/list?page=1&limit=30');
  const jsonData = await response.json();
  return jsonData;
});

//Define the cardDataslice
export const cardDataSlice = createSlice({
  name: 'cardData',
  initialState: {data: null, loading: false, error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCardData.pending, state => {
        console.log('api status => pending');
        state.loading = true;
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        console.log('api status => fulfilled');
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        console.log('api status => rejected');
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default cardDataSlice.reducer;
