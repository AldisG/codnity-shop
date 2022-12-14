import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import CartTableBody from './CartTableBody';
import NoItemsAtCart from './NoItemsAtCart';

const CartTableHead = () => {
  const cartItemCount = 3;
  const tableHeadContent = ['Product name', 'Price', 'Amount', 'Remove'];
  if (!cartItemCount) {
    return <NoItemsAtCart />;
  }
  return (
    <Box>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeadContent.map((it, i: number) => (
              <TableCell key={it + i} align={!i ? 'left' : 'right'}>
                <Typography key={it} fontWeight="bold">
                  {it}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <CartTableBody />
      </Table>
    </Box>
  );
};

export default CartTableHead;
