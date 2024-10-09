import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited, initUserData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks';
import { CategoryMenu } from '@/widgets/CategoryMenu';
import { useAppModals } from './hooks/useAppModals';
import { Header } from '@/widgets/Header';

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
            <Suspense fallback={<div>Loading....</div>}>
                <AppRouter />
            </Suspense>
        </div>
    );
});

export default withTheme(App);
