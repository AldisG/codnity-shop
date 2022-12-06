import { Card, Paper } from '@mui/material';
import { FC } from 'react';
import { linkNames } from '../utility/navigationButtonList';
import NavigationBtn from './NavigationBtn';

type Props = {};

const NavigationModal: FC<Props> = () => {
  return (
    <Paper sx={{ maxWidth: 'max-content' }}>
      <Card>
        {linkNames.map((link) => (
          <NavigationBtn key={link.name} link={link} />
        ))}
      </Card>
    </Paper>
  );
};

export default NavigationModal;
