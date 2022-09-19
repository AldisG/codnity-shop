import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

type P = {
  image: string;
  title: string;
};

const ImageWrapper: FC<P> = ({ image, title }) => {
  return (
    <Grid container width="100%" justifyContent="center">
      <Grid item xs={6}>
        <Box component="image" width="100%" maxWidth="100px" maxHeight="100px">
          <img src={image} alt={title} />
        </Box>
      </Grid>
      {/* ratings */}
    </Grid>
  );
};

export default ImageWrapper;
