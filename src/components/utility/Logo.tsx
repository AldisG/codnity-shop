import { Box, MenuItem, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        right: '50%',
        top: '50%',
        transform: 'translateY(-50%)',
        pointerEvents: 'none'
      }}
    >
      <Typography variant="h4" fontWeight="bold">LOGO</Typography>
    </Box>
  );
};

export default Logo;
