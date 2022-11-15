import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type P = {
  setCartOpen: (value: boolean) => void;
};

const CloseButton: FC<P> = ({ setCartOpen }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={() => setCartOpen(false)} sx={{ width: 'max-content' }}>
        <AiOutlineClose size={33} />
      </Button>
    </Box>
  );
};

export default CloseButton;
