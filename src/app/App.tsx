import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/entities/User';
import { HeaderDesktop } from '@/widgets/HeaderDesktop';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks';
import { HeaderTabsList } from '@/entities/HeaderTabs';
import useJSXModal from '@/shared/lib/hooks/useJSXModal';
import { FavoriteCategoryModal } from '@/features/FavoriteCategory';

const App = memo(() => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const {
        doModal: doFavoriteCategoryModal,
        modalContent: favoriteCategoryModalContent,
    } = useJSXModal(FavoriteCategoryModal);

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    return (
        <div id="app">
            <HeaderDesktop />
            <HeaderTabsList onFavoriteCategoryClick={doFavoriteCategoryModal} />
            {favoriteCategoryModalContent}
            <Suspense fallback={<div>Loading....</div>}>
                <AppRouter />
            </Suspense>
        </div>
    );
});

export default withTheme(App);
