import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModal: true,
};

const testSlice = createSlice({
  name: 'openModalSlice',
  initialState,
  reducers: {
    openModal: (state) => {
      state.openModal = !state.openModal;
      console.log(state.openModal);
    },
  },
  // reducers: {
  //   openModal: ({ openModal }) => {
  //     openModal = !openModal;
  //     console.log(openModal);
  //   },
  // },
});

export const { openModal } = testSlice.actions;
export default testSlice.reducer;
