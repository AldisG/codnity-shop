import { Checkbox, FormControlLabel, Grid } from '@mui/material';
import { FC, useState } from 'react';

type P = {
  value: string;
  label: string;
};

const CheckboxComponent: FC<P> = ({ value, label }) => {
  const valueFixed = value.replace(/ /g, '').toLowerCase();
  const [checked, setchecked] = useState(false);

  const handleChange = () => setchecked(!value);

  return (
    <Grid item xs={12}>
      <FormControlLabel
        control={
          <Checkbox
            value={checked}
            onChange={handleChange}
            defaultChecked={valueFixed !== 'consent'}
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
