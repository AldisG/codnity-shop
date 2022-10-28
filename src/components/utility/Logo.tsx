import { Box, MenuItem, Typography } from '@mui/material';
import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Box
      sx={{
        pointerEvents: 'none',
        justifySelf: 'center'
      }}
    >
      <AiFillShopping size={38} />
    </Box>
  );
};

export default Logo;
