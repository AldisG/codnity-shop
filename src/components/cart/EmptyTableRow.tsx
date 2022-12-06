import { TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { fontSize } from '../utility/sharedCartStyle';

const EmptyTableRow = () => {
  return (
    <TableBody>
      <TableRow>
        <TableCell align="right">
          <Typography
            variant="h5"
            textAlign="left"
            sx={{
              fontSize: fontSize,
            }}
          >
            You don't have any items in cart
          </Typography>
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default EmptyTableRow;
