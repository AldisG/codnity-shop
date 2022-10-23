import { Box } from '@mui/material';

const DecorBox = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: { xs: '1000px', md: '500px' },
        borderRadius: '4px',
        background:
          'linear-gradient(90deg, rgba(68,1,112,1) 0%, rgba(171,0,177,1) 50%, rgba(69,252,248,1) 100%)',
        boxShadow: '2px 8px 8px #33333366',
        zIndex: -10,
      }}
    />
  );
};

export default DecorBox;
