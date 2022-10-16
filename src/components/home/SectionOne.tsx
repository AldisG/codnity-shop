import { Box, CardMedia, Typography } from '@mui/material';
// import React from 'react';
import ActionButton from '../utility/ActionButton';
import DecorBox from './DecorBox';
import ShoppingGirl from '../../img/shopper.png';

const SectionOne = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        minHeight: '95vh',
        position: 'relative',
      }}
    >
      <Box sx={{ maxWidth: '450px', textAlign: 'center' }}>
        <Typography
          variant="h2"
          component="div"
          fontWeight="bold"
          color="#fff"
          fontSize={72}
          lineHeight={0.9}
          sx={{
            textShadow: '2px 2px 6px #33333399',
          }}
        >
          Some main header text
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          fontWeight="bold"
          fontSize={18}
          py={2}
        >
          Some main subtitle text of mini description and stuff
        </Typography>
        <ActionButton text="Start shopping!" />
      </Box>
      <DecorBox />
      <Box sx={{ width: '550px', alignSelf: 'flex-end' }}>
        <CardMedia
          component="img"
          image={ShoppingGirl}
          alt="Come and shop with us!"
          title="Come and shop with us!"
        />
      </Box>
    </Box>
  );
};

export default SectionOne;
