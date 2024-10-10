import { Modal } from '@/shared/ui/Modal';
import cls from './FavoriteCategoryModal.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import { FavoriteCategory } from '../..';

interface FavoriteCategoryModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const FavoriteCategoryModal = (props: FavoriteCategoryModalProps) => {
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
                <FavoriteCategory onClose={onClose} />
            </Modal.Content>
        </Modal>
    );
};
