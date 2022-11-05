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
        <Typography component="div" variant="h6">
          {children}
        </Typography>
      </LightTooltip>
    </div>
  );
};
export default CustomizedTooltips;
