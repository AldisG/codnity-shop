import { Box } from '@mui/material';
import { FC } from 'react';

type P = {
  children: React.ReactNode;
};

const DecorBox: FC<P> = ({ children }) => {
  return (
    <Box
      sx={{
        display: { xs: 'grid', md: 'flex' },
        alignItems: 'start',
        justifyContent: 'start',
        width: '100%',
        borderRadius: '4px',
        background:
          'linear-gradient(90deg, rgba(68,1,112,1) 0%, rgba(171,0,177,1) 50%, rgba(69,252,248,1) 100%)',
        boxShadow: '2px 8px 8px #33333366',
        mt: 6,
        gap: { xs: 10, md: 1 },
        py: 4,
        zIndex: -10,
      }}
    >
      {children}
    </Box>
  );
};

export default DecorBox;
