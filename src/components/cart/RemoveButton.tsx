import { Button } from '@mui/material';
import { FC } from 'react';
import { useAppDispatch } from '../../store/redux/hooks';
import { removeAnItem } from '../../store/slices/cartProductsSlice';

type P = {
  itemId: number;
  onClick?: () => void;
};

const RemoveButton: FC<P> = ({ itemId, onClick }) => {
  const dispatch = useAppDispatch();
  return (
    <Button
      variant="text"
      size="small"
      color='warning'
      onClick={() => {
        dispatch(removeAnItem(itemId));
        onClick && onClick();
      }}
    >
      X
    </Button>
  );
};

export default RemoveButton;
