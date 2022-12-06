import { Box, CardMedia } from '@mui/material';
import ShoppingGirl from '../../img/shopper.png';

const PosterPhoto = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignSelf: 'center',
        px: { xs: 2, md: 0}
      }}
    >
      <CardMedia
        component="img"
        image={ShoppingGirl}
        alt="Come and shop with us!"
        title="Come and shop with us!"
      />
    </Box>
  );
};

export default PosterPhoto;
