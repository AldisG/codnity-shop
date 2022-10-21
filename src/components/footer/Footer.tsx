import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import InfoFooter from './InfoFooter';
import InfoSocials from './InfoSocials';

const Footer = () => {
  return (
    <Box sx={{ py: 4, backgroundColor: '#333', color: '#ddd' }}>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 10, md: 4 }}>
          <Grid item xs={12} md={6}>
            <InfoFooter />
          </Grid>
          <Grid item xs={12} md={6}>
            <InfoSocials />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
