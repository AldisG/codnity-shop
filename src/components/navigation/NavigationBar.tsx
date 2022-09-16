import { AppBar, Box, MenuItem } from '@mui/material';
import NavigationButtons from './NavigationButtons';
import HamburgerMenu from './HamburgerMenu';
import Logo from '../utility/Logo';
import CartWrapper from '../cart/CartWrapper';
import { useAppSelector } from '../../store/redux/hooks';

const NavigationBar = () => {
  const modalIsOpen = useAppSelector(({ openModal }) => openModal.openModal);

  return (
    <AppBar position="static">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          position: 'relative',
        }}
      >
        <HamburgerMenu />
        {modalIsOpen ? <NavigationButtons /> : <HamburgerMenu />}
        <Logo />
        <CartWrapper />
      </Box>
    </AppBar>
  );
};

export default NavigationBar;
