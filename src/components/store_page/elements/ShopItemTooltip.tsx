// import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
// import { styled } from '@mui/material/styles';

// import React, { FC } from 'react';
// import { Typography } from '@mui/material';

// type P = {
//   title: string;
// };
// type TooltipProps2<T extends TooltipProps> = {
//   title: Element;
// };

// const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     backgroundColor: theme.palette.common.white,
//     color: 'rgba(0, 0, 0, 0.87)',
//     boxShadow: theme.shadows[1],
//     fontSize: 11,
//   },
// }));

// const ShopItemTooltip: FC<P> = ({ title }) => {
//   return (
//     <React.Fragment>
//       <LightTooltip title={<Typography></Typography>}></LightTooltip>
//     </React.Fragment>
//   );
// };

// export default ShopItemTooltip;
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

type P = {
  title: string;
  children: JSX.Element;
};

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: '#333',
    boxShadow: theme.shadows[1],
    fontSize: 14,
    textAlign: 'center',
  },
}));

const CustomizedTooltips: FC<P> = ({ title, children }) => {
  return (
    <div>
      <LightTooltip placement="top" title={title}>
        <Typography component="p" variant="h6">
          {children}
        </Typography>
      </LightTooltip>
    </div>
  );
};
export default CustomizedTooltips;
