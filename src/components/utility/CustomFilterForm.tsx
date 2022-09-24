import { FormControl } from '@mui/material';
import { FC } from 'react';

type P = {
  children: JSX.Element;
  adapt?: boolean;
};

const CustomFilterForm: FC<P> = ({ children, adapt }) => {
  return (
    <FormControl
      variant="standard"
      fullWidth
      sx={{
        display: adapt ? { xs: 'flex', md: 'none' } : 'flex',
      }}
    >
      {children}
    </FormControl>
  );
};

export default CustomFilterForm;
