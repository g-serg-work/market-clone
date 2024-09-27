import { useState, useCallback, memo } from 'react';
import { HeaderTabsList } from '@/entities/HeaderTabs';
import { FavoriteCategoryModal } from '@/features/FavoriteCategory';

export interface AppHeaderItemsProps {
    className?: string;
}

export const AppHeaderItems = memo((props: AppHeaderItemsProps) => {
    const { className } = props;
    const [isFavoriteCategoryActive, setIsFavoriteCategoryActive] =
        useState(false);

    const onFavoriteCategoryClose = useCallback(() => {
        setIsFavoriteCategoryActive(false);
    }, []);

    const onFavoriteCategoryClick = useCallback(() => {
        setIsFavoriteCategoryActive(true);
    }, []);

    return (
        <>
            <HeaderTabsList onFavoriteCategoryClick={onFavoriteCategoryClick} />
            {isFavoriteCategoryActive && (
                <FavoriteCategoryModal
                    isOpen={isFavoriteCategoryActive}
                    onClose={onFavoriteCategoryClose}
                />
            )}
        </>
    );
});
