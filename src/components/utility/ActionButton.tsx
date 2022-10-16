import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

type P = {
  text: string;
};

const ActionButton: FC<P> = ({ text }) => {
  return (
    <Box paddingTop={4}>
      <Button variant="contained" size="large">
        {text}
      </Button>
    </Box>
  );
};

export default ActionButton;
