import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { FavoriteCategoryProps } from './FavoriteCategory';
import { SkeletonHeight } from '../../styles/consts';

const FavoriteCategoryLazy = lazy(() => import('./FavoriteCategory'));

export const FavoriteCategoryAsync = (props: FavoriteCategoryProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={SkeletonHeight} />}>
            <FavoriteCategoryLazy {...props} />
        </Suspense>
    );
};
