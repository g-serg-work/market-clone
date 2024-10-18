import { useSelector } from 'react-redux';
import { getUserData, getUserInited } from '@/entities/User';
import { Suspense } from 'react';
import { RequireAuthPage } from '@/pages/RequireAuthPage';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth(props: RequireAuthProps) {
    const { children } = props;
    const userData = useSelector(getUserData);
    const inited = useSelector(getUserInited);

    if (!userData) {
        if (!inited) return null;

        // <Navigate to={getRouteMain()} state={{ from: location }} replace />
        return (
            <Suspense>
                <RequireAuthPage />
            </Suspense>
        );
    }

    return children;
}
