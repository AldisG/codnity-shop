import { Button, Typography } from '@mui/material';
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
      <Button variant="text" sx={{ color: '#fff' }}>
        <Typography>{name}</Typography>
      </Button>
    </Link>
  );
};

export default NavigationBtn;
