import { MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <MenuItem
      sx={{
        position: 'absolute',
        right: '50%',
      }}
    >
      <Link to="/">Logo</Link>
    </MenuItem>
  );
};

export default Logo;
