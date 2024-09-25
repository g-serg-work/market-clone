import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { RequireAuthPage } from '@/pages/RequireAuthPage';

interface RequireAuthProps {
    children: JSX.Element;
}

export function RequireAuth(props: RequireAuthProps) {
    const { children } = props;
    const auth = useSelector(getUserAuthData);

    if (!auth) {
        // <Navigate to={getRouteMain()} state={{ from: location }} replace />
        return <RequireAuthPage />;
    }

    return children;
}
