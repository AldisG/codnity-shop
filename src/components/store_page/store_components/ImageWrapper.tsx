import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

type P = {
  image: string;
  title: string;
  large?: boolean;
};

const ImageWrapper: FC<P> = ({ image, title, large }) => {
  return (
    <Grid container justifyContent="center" overflow="hidden">
      <Grid
        item
        xs={4}
        md={8}
        overflow="hidden"
        alignItems="center"
        maxWidth="100%"
        py={2}
      >
        <Box
          m="0 auto"
          height={large ? '' : '200px'}
          sx={{ display: 'grid', alignItems: 'center' }}
        >
          <img src={image} alt={title} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ImageWrapper;
