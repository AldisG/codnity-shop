import { Grid, Typography } from '@mui/material';

const InfoContacts = () => {
  return (
    <Grid container spacing={1} pl={1} pt={3}>
      <Grid item xs={6}>
        <Typography component="p" variant="body2">
          Adress
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="p" variant="body2">
          Shajing Town, Baoan District, Area1: S-B
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="p" variant="body2">
          Bussiness contact
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="p" variant="body2">
          storeBusiness@contact.com
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="p" variant="body2">
          Telephone
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography component="p" variant="body2">
          88-777-666-999
        </Typography>
      </Grid>
    </Grid>
  );
};

export default InfoContacts;
