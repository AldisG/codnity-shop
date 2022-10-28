import { Box, Container, Typography } from '@mui/material';

const NoItemsToShow = () => {
  return (
    <Box
      sx={{
        width: '100%',
        margin: '0 auto',
        pt: 6,
      }}
    >
      <Container maxWidth="md">
        <Typography component="div" variant="h3" textAlign="center" pb={2}>
          Sorry, there are no items to show...!
        </Typography>
        <Typography component="div" variant="subtitle1" textAlign="center">
          Perhaps there is no internet connection or the API link is down or no
          longer available.
        </Typography>
      </Container>
    </Box>
  );
};

export default NoItemsToShow;
