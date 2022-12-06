import { Box } from '@mui/material';
import DecorBox from './DecorBox';
import PosterPhoto from './PosterPhoto';
import PosterTexts from './PosterTexts';

const SectionOne = () => {
  return (
    <Box pb={8}>
      <DecorBox>
        <PosterTexts />
        <PosterPhoto />
      </DecorBox>
    </Box>
  );
};

export default SectionOne;
