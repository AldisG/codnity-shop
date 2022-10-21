import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type P = {
  text: string;
  goTo?: string;
};

const ActionButton: FC<P> = ({ text, goTo }) => {
  const navigate = useNavigate();
  return (
    <Box paddingTop={4}>
      <Button
        variant="contained"
        size="large"
        onClick={() => (goTo ? navigate(goTo) : '')}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ActionButton;
