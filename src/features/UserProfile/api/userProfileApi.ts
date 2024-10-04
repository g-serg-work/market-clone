import { rtkApi } from '@/shared/api/rtkApi';
import { User, UserId } from '@/entities/User';

interface GetUserProfileArg {
    userId: UserId;
}

const userProfileApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserProfile: build.query<User, GetUserProfileArg>({
            query: ({ userId }) => ({
                url: `/profile/${userId}`,
            }),
        }),
    }),
});

export const useGetUserProfile = userProfileApi.useGetUserProfileQuery;
