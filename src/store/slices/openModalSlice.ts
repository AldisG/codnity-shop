import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openModal: false,
};

const openMpdalSlice = createSlice({
  name: 'openModalSlice',
  initialState,
  reducers: {
    openModal: (state, { payload }: { payload: boolean }) => {
      state.openModal = payload;
      console.log(state.openModal);
    },
  },
});

export const { openModal } = openMpdalSlice.actions;
export default openMpdalSlice.reducer;
