import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageWrapper from '../store_page/store_components/ImageWrapper';
import LargeBtn from '../utility/LargeBtn';
import ProductNotFoundIcon from '../../img/no-content.png';

const ProductNotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate3d(-50%, -50%, 0)',
        willChange: 'transform',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 2,
        mt: 2,
      }}
    >
      <Typography
        component="div"
        variant="h3"
        fontWeight={900}
        fontSize={{ xs: 24, md: 40 }}
      >
        Sorry, the item does not exist.
      </Typography>
      <ImageWrapper image={ProductNotFoundIcon} title="product not found" large={true} />
      <LargeBtn onClick={() => navigate(-1)} txt="go back" />
    </Box>
  );
};

export default ProductNotFound;
