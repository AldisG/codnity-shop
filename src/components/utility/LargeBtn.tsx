import { Button } from '@mui/material';
import { FC } from 'react';

type P = {
  txt: string;
  solid?: boolean;
  onClick?: () => void;
  children?: JSX.Element;
};

const LargeBtn: FC<P> = ({ txt, solid, onClick, children }) => {
  const style = {
    width: '200px',
    fontSize: { xs: 14, md: 20 },
    py: { xs: 1, md: 1.2 },
    mt: 2,
  };
  return (
    <Button
      onClick={onClick}
      size="large"
      variant={solid ? 'contained' : 'outlined'}
      sx={style}
    >
      {children} {txt.toUpperCase()}
    </Button>
  );
};

export default LargeBtn;
