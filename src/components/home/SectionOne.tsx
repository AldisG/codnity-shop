import { Box, CardMedia, Typography } from '@mui/material';
// import React from 'react';
import ActionButton from '../utility/ActionButton';
import DecorBox from './DecorBox';
import PosterPhoto from './PosterPhoto';
import PosterTexts from './PosterTexts';

const SectionOne = () => {
  return (
    <Box>
      <DecorBox>
        <PosterTexts />
        <PosterPhoto />
      </DecorBox>
    </Box>
  );
};

export default SectionOne;
