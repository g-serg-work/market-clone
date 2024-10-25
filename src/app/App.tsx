import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks';
import { CategoryMenu } from '@/widgets/CategoryMenu';
import { useAppModals } from './hooks/useAppModals';
import { Header } from '@/widgets/Header';
import {
    getUserData,
    getUserHasToken,
    getUserInited,
    initUserData,
    userActions,
} from '@/entities/User';
import { Footer } from '@/widgets/Page';

const App = memo(() => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const { modalContent } = useAppModals();
    const userData = useSelector(getUserData);
    const userHasToken = useSelector(getUserHasToken);

    // TODO: refactor - change on use AppContext
    const deliveryAddress =
        userData?.addressList?.at(0) ??
        Intl.DateTimeFormat().resolvedOptions().timeZone;

    const isLogged = !!userData;

    useEffect(() => {
        if (!inited) {
            if (userHasToken) dispatch(initUserData());
            else dispatch(userActions.setInited());
        }
    }, [dispatch, inited, userHasToken]);

    return (
        <>
            <div id="app">
                <Header />
                <CategoryMenu
                    deliveryAddress={deliveryAddress}
                    isLogged={isLogged}
                />
                <AppRouter />
                <Suspense>
                    <Footer />
                </Suspense>
            </div>
            {modalContent}
        </>
    );
});

export default withTheme(App);
