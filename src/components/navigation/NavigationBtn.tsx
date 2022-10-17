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
    <MenuItem value={name}>
      <Link to={route}>
        <Typography>{name}</Typography>
      </Link>
    </MenuItem>
  );
};

export default NavigationBtn;
