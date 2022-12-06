import { DialogContent, Typography } from '@mui/material';

const ContentForEmailSubmission = () => {
  return (
    <DialogContent
      sx={{ pb: 4, px: 8, display: 'grid', gap: 4, textAlign: 'center' }}
    >
      <Typography component="div" variant="h3">
        Thank you!
      </Typography>
      <Typography component="div" variant="body1" textAlign="center">
        Your message has been sent!
        <br />
        You will TOTALLY be contacted as soon as we get to your email.
        <br />
        We appreciate your time for contacting us.
        <br />
      </Typography>
      <Typography component="div" variant="h6">
        Have a great day! 👋
      </Typography>
    </DialogContent>
  );
};

export default ContentForEmailSubmission;
