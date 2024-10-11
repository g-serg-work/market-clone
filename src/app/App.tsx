import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks';
import { CategoryMenu } from '@/widgets/CategoryMenu';
import { useAppModals } from './hooks/useAppModals';
import { Header } from '@/widgets/Header';
import { getUserInited, initUserData } from '@/entities/User';

const App = memo(() => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const modalContent = useAppModals();

    useEffect(() => {
        if (!inited) {
            dispatch(initUserData());
        }
    }, [dispatch, inited]);

    return (
        <div id="app">
            <Header />
            <CategoryMenu />
            {modalContent}
            <Suspense>
                <AppRouter />
            </Suspense>
        </div>
    );
});

export default withTheme(App);
