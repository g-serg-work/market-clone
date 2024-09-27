import { Modal } from '@/shared/ui/Modal';
import cls from './FavoriteCategoryModal.module.scss';
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
            className={cls.FavoriteCategoryModal}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <FavoriteCategory />
        </Modal>
    );
};
