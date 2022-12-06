import { Alert, Snackbar } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { setShowSnackbar } from '../../store/slices/showSnackbarSlice';

const UniversalSnackbar = () => {
  const dispatch = useAppDispatch();
  const { showSnackbar, caution, snackbarText } = useAppSelector(
    ({ showSnackbarSlice }) => showSnackbarSlice
  );

  const snackbarDisplayTime = 3000;

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(
        setShowSnackbar({
          open: false,
          caution: false,
        })
      );
    }, snackbarDisplayTime);

    return () => {
      clearTimeout(timer);
    };
  }, [showSnackbar, snackbarText]);

  return (
    <Snackbar open={showSnackbar}>
      <Alert
        onClose={() =>
          dispatch(
            setShowSnackbar({
              open: false,
              caution: false,
            })
          )
        }
        severity={caution ? 'warning' : 'success'}
        sx={{ width: '100%' }}
      >
        {snackbarText}
      </Alert>
    </Snackbar>
  );
};

export default UniversalSnackbar;
