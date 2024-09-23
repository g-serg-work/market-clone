import { Modal } from '@/shared/ui/Modal';
import { classNames } from '@/shared/lib/classNames/classNames';
import FavoriteCategory from './FavoriteCategory';

interface FavoriteCategoryModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const FavoriteCategoryModal = ({
    className,
    isOpen,
    onClose,
}: FavoriteCategoryModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
    >
        <FavoriteCategory />
    </Modal>
);
