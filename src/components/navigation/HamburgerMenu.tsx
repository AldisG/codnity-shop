import { AiOutlineMenu } from 'react-icons/ai';
import { MenuItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { openModal } from '../../store/slices/openModalSlice';

const HamburgerMenu = () => {
  const dispatch = useAppDispatch();
  const modalOpen = useAppSelector((state) => state.openModal.openModal);

  return (
    <MenuItem value="menu" onClick={() => dispatch(openModal(true))}>
      <AiOutlineMenu size={26} />
    </MenuItem>
  );
};

export default HamburgerMenu;
