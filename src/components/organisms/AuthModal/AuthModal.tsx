import { Modal } from '@/components/molecules/Modal/Modal';
import { AuthForm } from '@/components/molecules/SingInForm/SingUpForm/SingUpForm';

export const AuthModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <AuthForm onClose={onClose} />
    </Modal>
  );
};
