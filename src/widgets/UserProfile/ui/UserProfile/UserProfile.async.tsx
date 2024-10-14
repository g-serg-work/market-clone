import { lazy, Suspense } from 'react';
import { UserProfileProps } from './UserProfile';
import { UserProfileLoader } from '../UserProfileLoader/UserProfileLoader';

const UserProfileLazy = lazy(() =>
    import('./UserProfile').then((module) => ({
        default: module.UserProfile,
    })),
);

export const UserProfileAsync = (props: UserProfileProps) => {
    return (
        <Suspense fallback={<UserProfileLoader />}>
            <UserProfileLazy {...props} />
        </Suspense>
    );
};
