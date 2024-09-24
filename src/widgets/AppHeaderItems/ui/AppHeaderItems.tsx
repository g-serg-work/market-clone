import { useState, useCallback, memo } from 'react';
import { HeaderTabsList } from '@/entities/HeaderTabs';
import { FavoriteCategoryModal } from '@/features/FavoriteCategory/ui/FavoriteCategory/FavoriteCategoryModal';

export interface AppHeaderItemsProps {
    className?: string;
}

export const AppHeaderItems = memo((props: AppHeaderItemsProps) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onFavorite = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            <HeaderTabsList onFavoriteCategoryClick={onFavorite} />
            {isOpen && (
                <FavoriteCategoryModal isOpen={isOpen} onClose={onClose} />
            )}
        </>
    );
});
