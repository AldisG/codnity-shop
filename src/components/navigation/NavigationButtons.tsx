import { Box } from '@mui/material';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { linkNames } from '../utility/navigationButtonList';
import NavigationBtn from './NavigationBtn';

type P = {
  pathname?: string;
  vertical?: boolean;
};

const verticalStyle = {
  display: 'grid',
  gap: 1,
  px: 2,
  pt: 4,
};

const horizontalStyle = {
  display: 'flex',
  justifySelf: 'flex-start',
};

const NavigationButtons: FC<P> = ({ vertical }) => {
  const { pathname } = useLocation();

  return (
    <Box sx={vertical ? verticalStyle : horizontalStyle}>
      {linkNames.map((link) => (
        <NavigationBtn
          key={link.name}
          link={link}
          vertical={vertical}
          pathname={pathname}
        />
      ))}
    </Box>
  );
};

export default NavigationButtons;
