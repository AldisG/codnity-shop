import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  testInput: 'Store loggs:',
};

const testSlice = createSlice({
  name: 'testSlice',
  initialState,
  reducers: {
    consoleIt: (state, action) => {
      console.log(state.testInput + action.payload);
    },
  },
});

export const { consoleIt } = testSlice.actions
export default testSlice.reducer;
