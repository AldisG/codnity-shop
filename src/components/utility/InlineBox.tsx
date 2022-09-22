import { Box } from '@mui/system';
import { FC } from 'react';

type P = {
  wide?: boolean;
  sx?: any;
};

const InlineBox: FC<P> = ({ children, wide, sx }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: wide ? 'space-between' : 'center',
        textAlign: 'left',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default InlineBox;
