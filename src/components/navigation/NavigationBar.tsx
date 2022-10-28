import { AppBar, Box } from '@mui/material';
import NavigationButtons from './NavigationButtons';
import HamburgerMenu from './HamburgerMenu';
import Logo from '../utility/Logo';
import CartWrapper from '../cart/CartWrapper';
import { useAppSelector } from '../../store/redux/hooks';
import { Container } from '@mui/system';

const NavigationBar = () => {
  const modalIsOpen = useAppSelector(({ openModal }) => openModal.openModal);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: modalIsOpen ? '.5fr 1fr .5fr' : '1fr .2fr',
            justifyContent: 'space-between',
            justifyItems: 'flex-end',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Modal vieta izmantot <Drawer /> mui komponenti (perfect alternative) */}
          {modalIsOpen ? <NavigationButtons /> : <HamburgerMenu />}
          <Logo />
          <CartWrapper />
        </Box>
      </Container>
    </AppBar>
  );
};

export default NavigationBar;
