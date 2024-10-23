import { Modal } from '@/shared/ui/Modal';
import cls from './UserProfileModal.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import { UserProfile } from '../UserProfile';

const modalWidth = 324;

interface UserProfileModalProps {
    className?: string;
    left: number;
    top: number;
    isOpen: boolean;
    onClose: () => void;
}

export const UserProfileModal = (props: UserProfileModalProps) => {
    const { className, left, top, isOpen, onClose } = props;

    const style = { width: modalWidth, left: left - modalWidth, top };

    return (
        <Modal
            className={classNames('', {}, [className, 'userProfileModal'])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Modal.Overlay className={cls.overlay} />
            <Modal.Content className={cls.content} style={style}>
                <UserProfile autoFocus onClose={onClose} />
            </Modal.Content>
        </Modal>
    );
};
