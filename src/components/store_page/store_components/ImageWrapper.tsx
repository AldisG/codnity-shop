import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { Image as IMG } from 'mui-image';

type P = {
  image: string;
  title: string;
};

const ImageWrapper: FC<P> = ({ image, title }) => {
  return (
    <Grid container justifyContent="center">
      <Grid item maxHeight={{ xs: '200px', lg: '240px' }} xs={4} md={8}>
        <Box maxWidth="100px" overflow="hidden" m="0 auto">
          <img src={image} alt={title} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageWrapper;
