import { Typography } from '@mui/material'
import { Box } from '@mui/system'

const NoItemsAtCart = () => {
  return (
    <Box>
      <Typography variant="h6" py={4}>
        Sorry, you have 0 items in your cart!
      </Typography>
    </Box>
  )
}

export default NoItemsAtCart