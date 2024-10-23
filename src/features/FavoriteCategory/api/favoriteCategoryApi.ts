import { rtkApi } from '@/shared/api/rtkApi';
import { Category, CategoryId } from '@/entities/Category';

interface PostFavoriteCategoryArg {
    categoryIds: CategoryId[];
}

const favoriteCategoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFavoriteCategory: build.query<Category[], void>({
            query: () => ({
                url: `/favorite-category`,
            }),
            keepUnusedDataFor: 0,
        }),
        favoriteCategory: build.mutation<void, PostFavoriteCategoryArg>({
            query: (arg) => ({
                url: '/favorite-category',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetFavoriteCategory =
    favoriteCategoryApi.useGetFavoriteCategoryQuery;
export const useFavoriteCategory =
    favoriteCategoryApi.useFavoriteCategoryMutation;
