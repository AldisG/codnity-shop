import { createSlice } from '@reduxjs/toolkit';

type Payload = {
  payload: {
    open: boolean;
    caution: boolean;
    text?: string;
  };
};

const initialState = {
  showSnackbar: false,
  snackbarText: '',
  caution: false,
};

const showSnackbarSlice = createSlice({
  name: 'showSnackbarSlice',
  initialState,
  reducers: {
    setShowSnackbar: (state, { payload }: Payload) => {
      state.showSnackbar = payload.open;
      if (payload.text) {
        state.snackbarText = payload.text;
      }

      state.caution = payload.caution ? true : false;
    },
  },
});

export const { setShowSnackbar } = showSnackbarSlice.actions;
export default showSnackbarSlice.reducer;
