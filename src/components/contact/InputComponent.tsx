import { Grid, TextField } from '@mui/material';
import { FC } from 'react';

type P = {
  inputName: string;
  index: number;
};

const InputComponent: FC<P> = ({ inputName, index }) => {
  const inputNameFixed = inputName.replace(/ /g, '').toLowerCase();
  const isThisMessageField = inputNameFixed === 'message';
  console.log(isThisMessageField);
  return (
    <Grid item xs={12} sm={index < 2 ? 6 : 12}>
      <TextField
        name={inputNameFixed}
        required
        fullWidth
        id={inputNameFixed}
        label={inputName}
        multiline={isThisMessageField}
        rows={4}
      />
    </Grid>
  );
};

export default InputComponent;
