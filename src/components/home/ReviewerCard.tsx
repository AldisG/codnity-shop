import { Avatar, Grid, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import { avatarStyle, gridStyle, paperStyle } from '../utility/reviewerCardStyles';

type P = {
  reviewer: {
    name: string;
    photo: any;
  };
};



const ReviewerCard: FC<P> = ({ reviewer: { name, photo } }) => {
  return (
    <Grid item xs={12} md={6} lg={3} sx={gridStyle}>
      <Paper elevation={3} sx={paperStyle}>
        <Avatar
          alt={name}
          src={photo}
          sx={avatarStyle}
        />
        <Typography component="div" variant="h4">
          {name}
        </Typography>
        <Typography component="div" variant="body1" sx={{ maxWidth: '250px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          dolore dolorem voluptatum, quae molestias doloremque nostrum ipsam
          aliquid, ullam dicta nobis ut. Repudiandae a quae, quo impedit rem
          error ut.
        </Typography>
      </Paper>
    </Grid>
  );
};

export default ReviewerCard;
