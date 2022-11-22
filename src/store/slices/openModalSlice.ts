import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModal: false,
};

const testSlice = createSlice({
  name: 'openModalSlice',
  initialState,
  reducers: {
    openModal: (state, { payload }: { payload: boolean }) => {
      state.openModal = payload;
      console.log(state.openModal);
    },
  },
});

export const { openModal } = testSlice.actions;
export default testSlice.reducer;
