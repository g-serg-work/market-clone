import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/entities/User';
import { HeaderDesktop } from '@/widgets/HeaderDesktop';
import { AppRouter } from './providers/router';
import { AppHeaderItems } from '@/widgets/AppHeaderItems';
import { withTheme } from './providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks';

const App = memo(() => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    return (
        <div id="app">
            <HeaderDesktop />
            <AppHeaderItems />
            <Suspense fallback={<div>Loading....</div>}>
                <AppRouter />
            </Suspense>
        </div>
    );
});

export default withTheme(App);