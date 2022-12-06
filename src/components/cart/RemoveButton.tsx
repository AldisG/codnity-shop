import { Button } from '@mui/material';
import { FC } from 'react';

type P = {
  itemId: number;
  onClick?: (id: number) => void;
};

const RemoveButton: FC<P> = ({ itemId, onClick }) => {
  return (
    <Button
      variant="text"
      size="small"
      color="warning"
      onClick={() => {
        onClick && onClick(itemId);
      }}
      sx={{
        color: '#333',
      }}
    >
      X
    </Button>
  );
};

export default RemoveButton;
