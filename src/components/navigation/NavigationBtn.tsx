import { MenuItem, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
type Props = {
  link: {
    name: string;
    route: string;
  };
};
const NavigationBtn: FC<Props> = ({ link }) => {
  const { name, route } = link;
  return (
    <Link to={route}>
      <MenuItem>
        <Typography>{name}</Typography>
      </MenuItem>
    </Link>
  );
};

export default NavigationBtn;
