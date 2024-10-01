import { Modal } from '@/shared/ui/Modal';
import cls from './FavoriteCategoryModal.module.scss';
import { FavoriteCategory } from '../..';
import classNames from '@/shared/lib/classNames';

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
            overlayClassName={cls.overlay}
            contentClassName={cls.content}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <FavoriteCategory />
        </Modal>
    );
};
