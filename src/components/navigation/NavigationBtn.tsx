import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  link: {
    name: string;
    route: string;
  };
  vertical?: boolean;
};

const verticalStyle = {
  color: '#333',
  width: '260px',
};

const horizontalStyle = {
  color: '#fff',
};

const NavigationBtn: FC<Props> = ({ link, vertical }) => {
  const { name, route } = link;
  return (
    <Link to={route}>
      <Button variant="text" sx={vertical ? verticalStyle : horizontalStyle}>
        <Typography>{name}</Typography>
      </Button>
    </Link>
  );
};

export default NavigationBtn;
