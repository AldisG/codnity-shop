import { Alert, Snackbar } from '@mui/material';
import { FC } from 'react';

type P = {
  text: string;
  showSnackbar: boolean;
  setShowSnackbar: (value: boolean) => void;
};

const SnackBarUniversal: FC<P> = ({ text, showSnackbar, setShowSnackbar }) => {
  return (
    <Snackbar
      open={showSnackbar}
      autoHideDuration={5000}
      onClose={() => setShowSnackbar(false)}
    >
      <Alert
        onClose={() => setShowSnackbar(false)}
        severity="success"
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarUniversal;
