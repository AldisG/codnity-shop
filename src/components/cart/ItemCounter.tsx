import { Avatar } from '@mui/material';

const ItemCounter = ({
  amountOfItemsInCart,
}: {
  amountOfItemsInCart: number;
}) => {
  return (
    <Avatar
      sx={{
        bgcolor: '#05c46b',
        color: '#fff',
        width: '25px',
        height: '25px',
        fontSize: 18,
        ml: 1,
      }}
    >
      {amountOfItemsInCart}
    </Avatar>
  );
};

export default ItemCounter;
