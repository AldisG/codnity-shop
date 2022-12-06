import { Button } from '@mui/material';
import React from 'react';

const SubmitButton = () => {
  return (
    <Button
      type="submit"
      variant="contained"
      fullWidth
      sx={{
        mt: 3,
        mb: 2,
        py: 1.2,
      }}
    >
      Send Message
    </Button>
  );
};

export default SubmitButton;
