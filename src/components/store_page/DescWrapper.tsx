import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import InlineBox from '../utility/InlineBox';

type P = {
  description: string;
};

const DescWrapper: FC<P> = ({ description }) => {
  return (
    <InlineBox
      wide={true}
      sx={{ display: 'grid', gridTemplateColumns: '1fr 100px' }}
    >
      <Typography variant="subtitle2" component="div">
        {description.slice(0, 40) + '...'}
      </Typography>
      <Button variant="text" size="small" sx={{ p: 0 }}>
        read more
      </Button>
    </InlineBox>
  );
};

export default DescWrapper;
