import { rtkApi } from '@/shared/api/rtkApi';
import { Category, CategoryId } from '@/entities/Category';
import { UserId } from '@/entities/User';

interface GetFavoriteCategoryArg {
    userId: UserId;
}

interface PostFavoriteCategoryArg {
    userId: UserId;
    categoryIds: CategoryId[];
}

const favoriteCategoryApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getFavoriteCategory: build.query<Category[], GetFavoriteCategoryArg>({
            query: ({ userId }) => ({
                url: `/favorite-category/${userId}`,
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
