import { Avatar, Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const ContactTexts = () => {
  return (
    <Box
    sx={{
      display: 'grid',
      gap: 2
    }}
    >
      <Avatar
        sx={{
          m: '0 auto',
          bgcolor: 'secondary.main',
          height: 60,
          width: 120,
          borderRadius: 4,
        }}
      >
        <Typography component="p" variant="h3">
          Title
        </Typography>
      </Avatar>
      <Typography component="p" variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis non
        voluptate ad repellendus repudiandae eveniet quae veritatis tempore
        architecto sed? Et necessitatibus reprehenderit culpa porro! Explicabo
        rem eos eum architecto? Soluta, repellendus! Et, natus! Officia maxime
        veniam fugit beatae eos! Corrupti possimus sequi veniam beatae
        dignissimos architecto nostrum excepturi ipsa aspernatur quae
        doloremque, omnis iste est? Vero aliquid natus quidem?
      </Typography>
      <Typography component="p" variant="h6">
        Title 2
      </Typography>
      <Typography component="p" variant="body1">
        Aliquam non amet est eum odit adipisci veniam fugit, voluptas
        recusandae, temporibus eveniet laudantium, et necessitatibus? Quasi
        recusandae sint eum totam placeat. Animi temporibus consequatur itaque
        totam velit exercitationem dolores. Consequuntur, eos? Laudantium minus
        temporibus, deleniti quos illum ad iusto, soluta, ab voluptatem dolorum
        illo deserunt animi corrupti suscipit consequuntur. Ducimus deserunt
        dolorem reiciendis et non ex saepe quisquam sed. Ipsum, aliquid
        consequuntur. In id tempora sunt magnam consectetur, laboriosam harum
        velit voluptate voluptatibus dicta aliquid, ex numquam eos. Quod fugiat,
        veniam iusto tenetur assumenda animi nisi dignissimos eveniet repellat.
        Consectetur debitis, nemo modi alias dolore. Repellendus provident esse
        officia soluta quod eius! Quae beatae ex officiis molestiae!
      </Typography>
    </Box>
  );
};

export default ContactTexts;
