import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

type P = {
  text: string;
  goTo?: string;
  lowAccent?: boolean;
  caution?: boolean;
  simpleFunc?: () => void | undefined;
};

const ActionButton: FC<P> = ({
  text,
  goTo,
  lowAccent,
  caution,
  simpleFunc,
}) => {
  // this func also need to be a prop
  const handleDeleteCart = () => {
    console.log('IMPLEMENT DELETE CART ITEMS');
  };
  const navigate = useNavigate();
  return (
    <Box paddingTop={4}>
      <Button
        variant={lowAccent ? 'text' : 'contained'}
        size={lowAccent ? 'small' : 'large'}
        // @ts-ignore
        sx={{
          color: (t) => (caution ? t.palette.warning.main : t.palette.primary),
        }}
        onClick={() => {
          if (goTo) {
            navigate(goTo);
            return;
          }
          if (lowAccent) {
            handleDeleteCart();
          }
          if (simpleFunc) {
            simpleFunc();
          }
        }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ActionButton;
