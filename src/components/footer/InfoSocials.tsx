import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const icons = [
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
];

const InfoSocials = () => {
  return (
    <Box>
      <Typography component="div" variant="h6" pb={1}>
        Follow us on social media for giveaways!
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {icons.map((It, i: number) => (
          <Box>
            <a key={i} href="https://www.google.com">
              <It size={40} color="#ddd" />
            </a>
          </Box>
        ))}
      </Box>
      <Typography component="div" variant="body1" pt={2} color="#ddd">
        For more information, feel free to{' '}
        <Link
          style={{ color: '#ddd', textDecoration: 'underline' }}
          to="/contact"
        >
          Contact us!
        </Link>
      </Typography>
      <Box pt={2}>
        <Typography variant="caption">
          Copyright © 2022 Really fake shop. All rights (not really) reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoSocials;
