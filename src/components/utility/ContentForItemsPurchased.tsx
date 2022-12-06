import { DialogContent, Typography } from '@mui/material';

const ContentForItemsPurchased = () => {
  return (
    <DialogContent
      sx={{ pb: 4, px: 8, display: 'grid', gap: 4, textAlign: 'center' }}
    >
      <Typography component="div" variant="h3">
        Your purchase is complete!
      </Typography>
      <Typography component="div" variant="body1" textAlign="center">
        You will TOTALLY get these items to your home adress within "X" amount
        of days, we pinky promse!.
        <br />
        Meanwhile feel free to buy more, we like it!
        <br />
      </Typography>
    </DialogContent>
  );
};

export default ContentForItemsPurchased;
