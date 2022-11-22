import { AppBar, Box } from '@mui/material';
import NavigationButtons from './NavigationButtons';
import HamburgerMenu from './HamburgerMenu';
import Logo from '../utility/Logo';
import CartWrapper from '../cart/CartWrapper';
import { Container } from '@mui/system';
import Drawer from './Drawer';

const showHamburgerMenu = {
  display: {
    xs: 'flexe',
    sm: 'none',
  },
};
const showNavigationBar = {
  display: {
    xs: 'none',
    sm: 'block',
  },
};

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '.5fr 1fr .5fr',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          <Box sx={showNavigationBar}>
            <NavigationButtons />
          </Box>
          <Box sx={showHamburgerMenu}>
            <HamburgerMenu />
          </Box>
          <Logo />
          <CartWrapper />
        </Box>
      </Container>
      <Drawer />
    </AppBar>
  );
};

export default NavigationBar;
