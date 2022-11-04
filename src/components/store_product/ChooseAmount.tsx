import { Button, ButtonGroup, TextField, Typography } from '@mui/material';
import { FC, useState } from 'react';

type P = {
  amount: number;
  setAmount: (n: number) => void;
};

const maxAmount = 10;

const ChooseAmount: FC<P> = ({ amount, setAmount }) => {
  const handleAddAmount = () => {
    amount < maxAmount ? setAmount(amount + 1) : setAmount(maxAmount);
  };
  const handleSubtractAmount = () => {
    amount > 1 ?  setAmount(amount - 1) : setAmount(1);
  };

  return (
    <ButtonGroup size="large">
      <Button
        variant="outlined"
        onClick={handleSubtractAmount}
        disabled={amount <= 1}
      >
        <Typography variant="h4" component="p" sx={{ mt: -1 }}>
          -
        </Typography>
      </Button>
      <Button
        disabled
        variant="outlined"
        sx={{
          width: '70px',
          '&:disabled': {
            color: '#333333',
          },
        }}
      >
        <Typography variant="h4" component="p">
          {amount}
        </Typography>
      </Button>
      <Button
        variant="outlined"
        onClick={handleAddAmount}
        disabled={amount === maxAmount}
      >
        <Typography variant="h4" component="p">
          +
        </Typography>
      </Button>
    </ButtonGroup>
  );
};

export default ChooseAmount;
