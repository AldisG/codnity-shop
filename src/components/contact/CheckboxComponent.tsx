import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { FC } from 'react';

type P = {
  value: string;
  label: string;
};

const CheckboxComponent: FC<P> = ({ value, label }) => {
  const valueFixed = value.replace(/ /g, '').toLowerCase();
  return (
    <Grid item xs={12}>
      <FormControlLabel
        control={
          <Checkbox
            value={valueFixed}
            color="primary"
            id={valueFixed}
            name={valueFixed}
            required={valueFixed === 'consent'}
          />
        }
        label={label}
      />
    </Grid>
  );
};

export default CheckboxComponent;
