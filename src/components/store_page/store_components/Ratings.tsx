import { Box, Rating, Typography } from '@mui/material';
import { FC } from 'react';
import InlineBox from '../../utility/InlineBox';

type P = {
  rating: {
    rate: number;
    count: number;
  };
  size?: 'small' | 'medium' | 'large' | undefined;
};

const Ratings: FC<P> = ({ rating: { count, rate }, size }) => {
  const largerSize = size == 'large';
  return (
    <InlineBox>
      <Rating
        name="half-rating"
        value={rate}
        precision={0.5}
        size={size ? size : 'small'}
        readOnly
      />

      <Typography
        component="span"
        variant={size == 'large' ? 'subtitle1' : 'subtitle2'}
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <Typography px={1} fontWeight={500} fontSize={largerSize ? 22 : 18}>
          /
        </Typography>
        <Typography pr={1} fontWeight={900} fontSize={largerSize ? 22 : 18}>
          {count}
        </Typography>
        <Typography fontWeight={500}>reviews</Typography>
      </Typography>
    </InlineBox>
  );
};

export default Ratings;
