import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useGetFavoriteCategory } from '../../api/favoriteCategoryApi';
import classNames from '@/shared/lib/classNames';
import { getUserAuthData } from '@/entities/User';
import cls from './FavoriteCategory.module.scss';
import { ApiError } from '@/shared/ui/ApiError';
import { FavoriteCategoryLoader } from '../FavoriteCategoryLoader/FavoriteCategoryLoader';

export interface FavoriteCategoryProps {
    className?: string;
}

const FavoriteCategory = memo((props: FavoriteCategoryProps) => {
    const { className } = props;
    const userData = useSelector(getUserAuthData);

    const { data, isLoading, isError, error } = useGetFavoriteCategory({
        userId: userData?.id ?? '',
    });

    if (isLoading) {
        return (
            <div className={classNames(cls.FavoriteCategory, {}, [className])}>
                <FavoriteCategoryLoader />
            </div>
        );
    }

    if (isError) {
        return (
            <div className={classNames(cls.FavoriteCategory, {}, [className])}>
                <ApiError error={error} />
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
        </div>
    );
});

export default FavoriteCategory;
