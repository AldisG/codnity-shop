export const centeredStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const gridStyle = {
  centeredStyle,
  flexDirection: 'column',
  textAlign: 'center',
  width: {
    xs: '150px',
    md: '100px',
  },
};
export const paperStyle = {
  p: 4,
  width: '100%',
  ...centeredStyle,
  flexDirection: 'column',
  gap: 1,
};
export const avatarStyle = {
  width: {
    xs: '150px',
    md: '100px',
  },
  height: {
    xs: '150px',
    md: '100px',
  },
}