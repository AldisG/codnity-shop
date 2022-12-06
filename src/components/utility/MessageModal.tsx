import { Dialog, DialogContent, Typography } from '@mui/material';
import { useState } from 'react';

const MessageModal = () => {
  const [cartOpen, setCartOpen] = useState(true);
  return (
    <Dialog onClose={() => setCartOpen(false)} open={cartOpen} maxWidth="xl">
      <DialogContent sx={{ pt: 0 }}>
        <Typography component="div" variant="h3">
          Thank you!
        </Typography>
        <Typography component="div" variant="body1">
          Your message has been sent!
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default MessageModal;
