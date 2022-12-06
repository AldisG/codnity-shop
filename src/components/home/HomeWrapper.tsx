import { Container } from '@mui/system';
import React from 'react';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';

const HomeWrapper = () => {
  return (
    <Container maxWidth="xl" >
      <SectionOne />
      <SectionTwo />
    </Container>
  );
};

export default HomeWrapper;
