import { Dialog } from '@mui/material';
import CloseButton from './CloseButton';
import ContentForEmailSubmission from './ContentForEmailSubmission';
import ContentForItemsPurchased from './ContentForItemsPurchased';

type P = {
  modalIsOpen: boolean;
  handleClose: () => void;
  purchased?: boolean;
};

const MessageModal = ({ modalIsOpen, handleClose, purchased }: P) => {
  const closeModalTimer = setTimeout(() => {
    handleClose();
    return () => clearTimeout(closeModalTimer);
  }, 9000);

  return (
    <Dialog onClose={handleClose} open={modalIsOpen} maxWidth="lg">
      <CloseButton onClick={handleClose} />
      {purchased ? <ContentForItemsPurchased /> : <ContentForEmailSubmission />}
    </Dialog>
  );
};

export default MessageModal;
