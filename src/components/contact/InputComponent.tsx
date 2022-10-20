import { Grid, TextField } from '@mui/material';
import { FC, useState, useEffect } from 'react';

type P = {
  inputName: string;
  index: number;
  messageSubmitted: boolean;
  resetSubmissionBoolean: () => void;
};

const InputComponent: FC<P> = ({
  inputName,
  index,
  messageSubmitted,
  resetSubmissionBoolean,
}) => {
  const [input, setinput] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setinput('');
    resetSubmissionBoolean();
  }, [messageSubmitted]);

  const inputNameFixed = inputName.replace(/ /g, '').toLowerCase();
  const isThisMessageField = inputNameFixed === 'message';
  const isThisLastNameField = inputNameFixed === 'lastname';
  const cherryPickEmail = inputName.toLowerCase().split(' ')[0] === 'email';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setinput(e.target.value);
    if (input.length > 3) {
      if (cherryPickEmail) {
        const emailRegex = /^\S+@\S+\.\S+$/
        setIsValid(emailRegex.test(input));
        return;
      }
      setIsValid(true);
      setDirty(false)
    } else {
      setIsValid(false);
    }
  };

  return (
    <Grid item xs={12} sm={index < 2 ? 6 : 12}>
      <TextField
        name={inputNameFixed}
        error={dirty && !isValid}
        value={input}
        onBlur={() => setDirty(true)}
        onChange={handleChange}
        required={!isThisLastNameField}
        fullWidth
        id={inputNameFixed}
        label={inputName}
        multiline={isThisMessageField}
        rows={4}
        type={cherryPickEmail ? 'email' : 'text'}
      />
    </Grid>
  );
};

export default InputComponent;
