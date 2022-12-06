import { Button, Typography } from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  link: {
    name: string;
    route: string;
  };
  vertical?: boolean;
  pathname: string;
};

const verticalStyle = {
  color: '#333',
  width: '260px',
};

const horizontalStyle = {
  color: '#fff',
};

const NavigationBtn: FC<Props> = ({ link, vertical, pathname }) => {
  const { name, route } = link;
  const cleanPathName = pathname.replace('/', '').toLowerCase();
  const currentPage = !cleanPathName ? 'home' : cleanPathName;
  const fontWeight = name.toLowerCase() === currentPage ? 'bold' : 'regular';

  return (
    <Link to={route}>
      <Button variant="text" sx={vertical ? verticalStyle : horizontalStyle}>
        <Typography fontWeight={fontWeight}>{name}</Typography>
      </Button>
    </Link>
  );
};

export default NavigationBtn;
