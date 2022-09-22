import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

type P = {
  image: string;
  title: string;
};

const ImageWrapper: FC<P> = ({ image, title }) => {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        maxHeight={{ xs: '200px', lg: '240px' }}
        overflow="hidden"
        xs={4}
        md={8}
      >
        <Box component="image" maxWidth="100px">
          <img src={image} alt={title} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageWrapper;
