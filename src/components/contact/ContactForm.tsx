import { FC, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputComponent from './InputComponent';
import CheckboxComponent from './CheckboxComponent';
import MessageModal from '../utility/MessageModal';
import SubmitButton from './SubmitButton';

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
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClose = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setModalIsOpen(true);
    setMessageSubmitted(true);
    setShowLoading(true);
  };

  const resetSubmissionBoolean = () => setMessageSubmitted(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h1" variant="h2" fontSize={54} fontWeight="bold">
        Contact us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {inputNames.map((item, i: number) => (
            <InputComponent
              key={item}
              inputName={item}
              index={i}
              messageSubmitted={messageSubmitted}
              resetSubmissionBoolean={resetSubmissionBoolean}
            />
          ))}

          <Box sx={{ pl: 2, pt: 2 }}>
            {checkboxes.map(({ label, value }) => (
              <CheckboxComponent key={label} value={value} label={label} />
            ))}
          </Box>
        </Grid>
        <SubmitButton />
      </Box>
      <MessageModal modalIsOpen={modalIsOpen} handleClose={handleClose} />
    </Box>
  );
};
export default ContactForm;
