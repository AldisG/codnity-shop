import { Backdrop, CircularProgress, Snackbar } from '@mui/material';
import React, { FC, useEffect, useState } from 'react';
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
  const [showSnackbar, setShowSnackbar] = useState(false);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowLoading(false)
      setShowSnackbar(true);
    }, 1100);
    timer;
    return () => {
      clearTimeout(timer);
    };
  }, [showLoading]);

  return (
    <>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={showLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={() => setShowSnackbar(false)}
      >
        <Alert
          onClose={() => setShowSnackbar(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Email has been sent successfully!
        </Alert>
      </Snackbar>
    </>
  );
};

export default BackdropLoading;
