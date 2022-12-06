import { Box } from '@mui/material';
import { AiFillShopping } from 'react-icons/ai';

const Logo = () => {
  return (
    <Box
      sx={{
        pointerEvents: 'none',
        justifySelf: 'center',
      }}
    >
      <AiFillShopping size={38} color="#1ecbe1" />
    </Box>
  );
};

export default Logo;
