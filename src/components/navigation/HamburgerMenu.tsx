import { AiOutlineMenu } from 'react-icons/ai';
import { MenuItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { openModal } from '../../store/slices/openModalSlice';

const HamburgerMenu = () => {
  const dispatch = useAppDispatch();
  return (
    <MenuItem value="menu" onClick={() => dispatch(openModal())}>
      <AiOutlineMenu />
    </MenuItem>
  );
};

export default HamburgerMenu;
