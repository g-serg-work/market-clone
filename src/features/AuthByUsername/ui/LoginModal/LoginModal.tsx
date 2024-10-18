import { Modal } from '@/shared/ui/Modal';
import cls from './LoginModal.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import { LoginModalFooter } from '../LoginModalFooter/LoginModalFooter';
import { LoginForm } from '../LoginForm';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            className={classNames('', {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Modal.Overlay className={cls.overlay} />
            <Modal.Content className={cls.content}>
                <div className={cls.wrapper}>
                    <LoginForm autoFocus onClose={onClose} />
                </div>
                <LoginModalFooter />
            </Modal.Content>
        </Modal>
    );
};
