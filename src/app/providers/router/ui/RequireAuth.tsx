import { useSelector } from 'react-redux';
import { getUserAuthData, getUserInited } from '@/entities/User';
import { RequireAuthPage } from '@/pages/RequireAuthPage';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth(props: RequireAuthProps) {
    const { children } = props;
    const auth = useSelector(getUserAuthData);
    const inited = useSelector(getUserInited);

    if (!auth) {
        if (!inited) return <div>Loading....</div>;

        // <Navigate to={getRouteMain()} state={{ from: location }} replace />
        return <RequireAuthPage />;
    }

    return children;
}
