import { Box, Typography } from '@mui/material';
import ActionButton from '../utility/ActionButton';

const PosterTexts = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        alignContent: 'center',
        justifyContent: 'center',
        minHeight: '100%',
        width: { xs: '100%', md: '80%'},
        maxWidth: '800px',
        justifyItems: { xs: 'center', md: 'flex-start' },
        px: { xs: 2, md: 4}
      }}
    >
      <Typography
        variant="h2"
        component="div"
        fontWeight="bold"
        color="#fff"
        fontSize={72}
        lineHeight={0.9}
        sx={{
          textShadow: '2px 2px 6px #33333399',
          textAlign: {xs: 'center', md: 'left'}
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
        sx={{
          textAlign: {xs: 'center', md: 'left'}
        }}
      >
        Some main subtitle text of mini description and stuff
      </Typography>
      <ActionButton text="Start shopping!" goTo="/store" />
    </Box>
  );
};

export default PosterTexts;
