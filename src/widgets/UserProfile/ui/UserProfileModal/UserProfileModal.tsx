import { Modal } from '@/shared/ui/Modal';
import cls from './UserProfileModal.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import { UserProfile } from '../..';

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

    return (
        <Modal
            className={classNames('', {}, [className])}
            overlayClassName={cls.overlay}
            contentClassName={cls.content}
            contentStyle={{ width: modalWidth }}
            positionAt="lt"
            left={left - modalWidth}
            top={top}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <UserProfile autoFocus />
        </Modal>
    );
};
