import { Box, CircularProgress } from '@mui/material';
const LoadingItems = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        willChange: 'transform',
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  );
};

export default LoadingItems;
