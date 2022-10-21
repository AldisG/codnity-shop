import { AppBar, Box } from '@mui/material';
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
          display: 'grid',
          gridTemplateColumns: modalIsOpen ? '.2fr 1fr .5fr' : '1fr .2fr',
          // gridTemplateColumns: { xs: '1fr .2fr', md: '.2fr 1fr .5fr'},
          justifyContent: 'space-between',
          justifyItems: 'flex-end',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Modal vieta izmantot <Drawer /> mui komponenti (perfect alternative) */}
        {modalIsOpen ? <NavigationButtons /> : <HamburgerMenu />}
        <Logo />
        <CartWrapper />
      </Box>
    </AppBar>
  );
};

export default NavigationBar;
