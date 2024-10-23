import { memo } from 'react';
import { useGetFavoriteCategory } from '../../api/favoriteCategoryApi';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './FavoriteCategory.module.scss';
import { ApiError } from '@/shared/ui/ApiError';
import { FavoriteCategoryLoader } from '../FavoriteCategoryLoader/FavoriteCategoryLoader';
import { FavoriteCategoryClose } from '../FavoriteCategoryClose/FavoriteCategoryClose';

export interface FavoriteCategoryProps {
    className?: string;
    onClose?: () => void;
}

export const FavoriteCategory = memo((props: FavoriteCategoryProps) => {
    const { className, onClose } = props;

    const { data, isLoading, isError, error } = useGetFavoriteCategory();

    if (isLoading) {
        return (
            <div className={classNames(cls.FavoriteCategory, {}, [className])}>
                <FavoriteCategoryLoader onClose={onClose} />
            </div>
        );
    }

    if (isError) {
        return (
            <div className={classNames(cls.FavoriteCategory, {}, [className])}>
                <FavoriteCategoryLoader onClose={onClose}>
                    <ApiError error={error} />
                </FavoriteCategoryLoader>
            </div>
        );
    }

    // TODO: replace on original layout
    const items = data?.length ? (
        <div style={{ display: 'flex', gap: 10 }}>
            {data?.map(({ id, img, href }) => (
                <figure key={id} style={{ display: 'inline-block' }}>
                    <img src={img} alt={img} style={{ maxWidth: 150 }} />
                    <figcaption>{href}</figcaption>
                </figure>
            ))}
        </div>
    ) : (
        <div>категории не найдены</div>
    );

    return (
        <div
            className={classNames(cls.FavoriteCategory, {}, [className])}
            role="dialog"
            aria-modal="true"
            data-auto="content"
        >
            <div className={cls.categoryPreview}>
                <div className={cls.header}>
                    <div className={cls.title}>Любимые категории</div>
                    <div className={cls.description}>
                        На них действуют скидки, которые уже отражены в ценах и
                        суммируются с другими акциями
                    </div>
                </div>
                <div className={cls.contentWrapper}>
                    <div className={cls.content}>{items}</div>
                </div>
            </div>
            <FavoriteCategoryClose onClose={onClose} />
        </div>
    );
});
