import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useGetFavoriteCategory } from '../../api/favoriteCategoryApi';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './FavoriteCategory.module.scss';
import { SkeletonHeight } from '../../styles/consts';
import { ApiError } from '@/shared/ui/ApiError';

export interface FavoriteCategoryProps {
    className?: string;
}

const FavoriteCategory = memo((props: FavoriteCategoryProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);

    const { data, isLoading, isError, error } = useGetFavoriteCategory({
        userId: userData?.id ?? '',
    });

    let content = null;

    if (isLoading) {
        content = <Skeleton width="100%" height={SkeletonHeight} />;
    } else {
        content = (
            <>
                <div className={cls.title}>Любимые категории</div>
                <div className={cls.content}>
                    На них действуют скидки, которые уже отражены в ценах и
                    суммируются с другими акциями
                </div>
                {/* TODO: remove after release */}
                <div style={{ display: 'flex', gap: 10 }}>
                    {isError ? (
                        <ApiError error={error} />
                    ) : (
                        data?.map(({ id, img, href }) => (
                            <figure
                                key={id}
                                style={{ display: 'inline-block' }}
                            >
                                <img
                                    src={img}
                                    alt={img}
                                    style={{ maxWidth: 150 }}
                                />
                                <figcaption>{href}</figcaption>
                            </figure>
                        ))
                    )}
                </div>
            </>
        );
    }

    return <div className={cls.wrapper}>{content}</div>;
});

export default FavoriteCategory;
