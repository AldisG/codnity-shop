import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { FC } from 'react';

type P = {
  title: string;
};

const Tag: FC<P> = ({ title }) => {
  const style = {
    width: 'max-content',
    p: '6px 18px',
    m: '0 auto',
    fontWeight: 'bold',
    backgroundColor: title === 'SALE' ? '#e74c3c' : '#2ecc71',
    color: '#fff',
  };
  return <Paper sx={style}>{title}</Paper>;
};

export default Tag;
