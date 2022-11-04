import { Button } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from '../../store/redux/hooks';
import { removeAnItem } from '../../store/slices/cartProductsSlice';

type P = {
  itemId: number;
};

const RemoveButton: FC<P> = ({ itemId }) => {
  const dispatch = useAppDispatch();
  return (
    <Button
      variant="text"
      size="small"
      onClick={() => {
        dispatch(removeAnItem(itemId));
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
