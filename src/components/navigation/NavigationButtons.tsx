import { Box } from '@mui/material';
import { linkNames } from '../utility/navigationButtonList';
import NavigationBtn from './NavigationBtn';

const NavigationButtons = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {linkNames.map((link) => (
        <NavigationBtn key={link.name} link={link} />
      ))}
    </Box>
  );
};

export default NavigationButtons;
