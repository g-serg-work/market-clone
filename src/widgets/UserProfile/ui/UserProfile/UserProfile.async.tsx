import { lazy, Suspense } from 'react';
import { UserProfileProps } from './UserProfile';
import { UserProfileLoader } from '../UserProfileLoader/UserProfileLoader';

const UserProfileLazy = lazy(() => import('./UserProfile'));

export const UserProfileAsync = (props: UserProfileProps) => {
    return (
        <Suspense fallback={<UserProfileLoader />}>
            <UserProfileLazy {...props} />
        </Suspense>
    );
};
