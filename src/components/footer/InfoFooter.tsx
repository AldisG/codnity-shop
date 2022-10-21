import { Box, Typography } from '@mui/material';
import InfoContacts from './InfoContacts';

const InfoFooter = () => {
  return (
    <Box maxWidth="70%">
      <Typography component="p" variant="h6" pb={1}>
        Important information
      </Typography>
      <Typography component="p" variant="caption" pl={1}>
        Our products may contain nicotine, a poisonous and addictive substance.
        Our products are only intended for committed smokers of legal smoking
        age and not by children, women who are pregnant or may become pregnant
        or any person with an elevated risk of, or preexisting condition of, any
        medical condition which includes, but is not limited to, heart disease,
        diabetes, high blood pressure or asthma. Eleaf makes no claims that the
        electronic cigarette will cure a smoker's addiction to nicotine.
      </Typography>
      <InfoContacts />
    </Box>
  );
};

export default InfoFooter;
