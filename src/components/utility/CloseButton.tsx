import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

type P = {
  onClick: (value: boolean) => void;
};

const CloseButton: FC<P> = ({ onClick }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button onClick={() => onClick(false)} sx={{ width: 'max-content' }}>
        <AiOutlineClose size={33} />
      </Button>
    </Box>
  );
};

export default CloseButton;
