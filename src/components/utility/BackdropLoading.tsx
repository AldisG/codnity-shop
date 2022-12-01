import { Backdrop, CircularProgress, Snackbar } from '@mui/material';
import React, { FC, useState } from 'react';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type P = {
  showLoading: boolean;
  setShowLoading: (value: boolean) => void;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BackdropLoading: FC<P> = ({ showLoading, setShowLoading }) => {
  const startSnackbarTimer = () => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1100);
    timer;
    return () => {
      clearTimeout(timer);
    };
  };
  if (showLoading === true) {
    startSnackbarTimer();
  }

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default BackdropLoading;
