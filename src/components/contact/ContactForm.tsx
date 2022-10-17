// import React from 'react'

// const ContactForm = () => {
//   return (
//     <div>ContactForm</div>
//   )
// }

// export default ContactForm

import { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputComponent from './InputComponent';
import CheckboxComponent from './CheckboxComponent';
import { FormControl, TextField } from '@mui/material';

const inputNames = ['First Name', 'Last Name', 'Email Address', 'Message'];
const checkboxes = [
  {
    value: 'allowExtraEmails',
    label: 'I want to receive promotional ads in my email.',
  },
  {
    value: 'consent',
    label:
      'I consent to my privacy being abused by providing us with your email data.',
  },
];

type P = {
  setShowLoading: (value: boolean) => void;
};

const ContactForm: FC<P> = ({ setShowLoading }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if not all fields, setErrorText & return
    const data = new FormData(event.currentTarget);
    console.log({
      fName: data.get('firstname'),
      lName: data.get('lastname'),
      email: data.get('emailaddress'),
      message: data.get('message'),
      consent: data.get('consent'),
      spam: data.get('allowextraemails'),
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h4">
        Contact us
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {inputNames.map((item, i: number) => (
            <InputComponent key={item} inputName={item} index={i} />
          ))}

          <Box sx={{ pl: 2, pt: 2 }}>
            {checkboxes.map(({ label, value }) => (
              <CheckboxComponent key={label} value={value} label={label} />
            ))}
          </Box>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3, mb: 2, py: 1.2 }}
          onClick={() => setShowLoading(true)}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};
export default ContactForm;
