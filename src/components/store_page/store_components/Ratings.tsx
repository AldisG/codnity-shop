import { Rating, Typography } from '@mui/material';
import { FC } from 'react';
import InlineBox from '../../utility/InlineBox';

type P = {
  rating: {
    rate: number;
    count: number;
  };
};

const Ratings: FC<P> = ({ rating: { count, rate } }) => {
  return (
    <InlineBox>
      <Rating
        name="half-rating"
        defaultValue={rate}
        precision={0.5}
        size="small"
        readOnly
      />
      <Typography component="span" variant="subtitle2">
        /{count} reviews
      </Typography>
    </InlineBox>
  );
};

export default Ratings;
