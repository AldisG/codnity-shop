import { Box } from '@mui/system';
import { FC } from 'react';

type P = {
  children: JSX.Element;
};

const CategoryPadding: FC<P> = ({ children }) => {
  return (
    <Box
      position="static"
      sx={{ height: 'max-content', pt: 3, width: '90%', margin: '0 auto' }}
    >
      {children}
    </Box>
  );
};

export default CategoryPadding;
