import { Alert, Snackbar } from '@mui/material';
import { FC } from 'react';

type P = {
  text: string;
  showSnackbar: boolean;
  setShowSnackbar: (value: boolean) => void;
  caution?: boolean;
};

const SnackBarUniversal: FC<P> = ({
  text,
  showSnackbar,
  setShowSnackbar,
  caution,
}) => {
  return (
    <Snackbar
      open={showSnackbar}
      autoHideDuration={5000}
      onClose={() => setShowSnackbar(false)}
    >
      <Alert
        onClose={() => setShowSnackbar(false)}
        severity={caution ? 'warning' : 'success'}
        sx={{ width: '100%' }}
      >
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarUniversal;
