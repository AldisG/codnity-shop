import { TableBody, TableCell, TableRow, Typography } from '@mui/material';

const EmptyTableRow = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="right">
          <Typography variant="h5" textAlign="left">
            You don't have any items in cart
          </Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default EmptyTableRow;
