import { Container, Grid } from '@mui/material';
import { useState } from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactTexts from '../components/contact/ContactTexts';
import BackdropLoading from '../components/utility/BackdropLoading';

const Contact = () => {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <Container maxWidth="xl" sx={{ py: 4, mt: 8 }}>
      <Grid container px={8} spacing={8}>
        <Grid item xs={12} md={6}>
          <ContactForm setShowLoading={setShowLoading} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ContactTexts />
        </Grid>
      </Grid>
      <BackdropLoading
        showLoading={showLoading}
        setShowLoading={setShowLoading}
      />
    </Container>
  );
};

export default Contact;
