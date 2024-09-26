import { Modal } from '@/shared/ui/Modal';
import FavoriteCategory from './FavoriteCategory';
import cls from './FavoriteCategoryModal.module.scss';

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
