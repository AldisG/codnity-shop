import { Drawer as DrawerMui } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { openModal } from '../../store/slices/openModalSlice';
import CloseButton from '../utility/CloseButton';
import NavigationButtons from './NavigationButtons';

const style = {
  display: 'grid',
  justifyItems: 'center',
  color: 'red',
};

const Drawer = () => {
  const dispatch = useAppDispatch();
  const modalOpen = useAppSelector((state) => state.openModal.openModal);

  const handleClose = () => {
    dispatch(openModal(!modalOpen));
  };

  return (
    <DrawerMui onClose={handleClose} open={modalOpen} sx={style}>
      <CloseButton onClick={handleClose} />
      <NavigationButtons vertical />
    </DrawerMui>
  );
};

export default Drawer;
