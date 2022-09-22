import { Box, Typography } from '@mui/material';

const NoItemsToShow = () => {
  return (
    <Box
      sx={{
        width: '100vw',
        margin: '0 auto',
        pt: 2,
      }}
    >
      <Typography component="div" variant="h3" textAlign="center" pb={2}>
        Sorry, there are no items to show...!
      </Typography>
      <Typography component="div" variant="subtitle1" textAlign="center">
        Perhaps there is no internet connection or the API link is down or no
        longer available.
      </Typography>
    </Box>
  );
};

export default NoItemsToShow;
