import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks';
import { CategoryMenu } from '@/widgets/CategoryMenu';
import { useAppModals } from './hooks/useAppModals';
import { Header } from '@/widgets/Header';
import { getUserData, getUserInited, initUserData } from '@/entities/User';

const App = memo(() => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const modalContent = useAppModals();
    const userData = useSelector(getUserData);

    // TODO: refactor - change on use AppContext
    const deliveryAddress =
        userData?.addressList?.at(0) ??
        Intl.DateTimeFormat().resolvedOptions().timeZone;

    const isLogged = !!userData;

    useEffect(() => {
        if (!inited) {
            dispatch(initUserData());
        }
    }, [dispatch, inited]);

    return (
        <div id="app">
            <Header />
            <CategoryMenu
                deliveryAddress={deliveryAddress}
                isLogged={isLogged}
            />
            {modalContent}
            <Suspense>
                <AppRouter />
            </Suspense>
        </div>
    );
});

export default withTheme(App);
