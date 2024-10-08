import { memo, Suspense, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/entities/User';
import { Header, HeaderMenuItemAvatarClickCallback } from '@/widgets/Header';
import { AppRouter } from './providers/router';
import { withTheme } from './providers/ThemeProvider';
import { useAppDispatch } from '@/shared/lib/hooks';
import useJSXModal from '@/shared/lib/hooks/useJSXModal';
import { FavoriteCategoryModal } from '@/features/FavoriteCategory';
import { UserProfileModal } from '@/widgets/UserProfile';
import callElementBoundingClientRect from '@/shared/lib/helpers/callElementBoundingClientRect';
import { CategoryMenu } from '@/widgets/CategoryMenu';

const userProfileModalProps = { left: 0, top: 0 };

const App = memo(() => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);

    const {
        doModal: doFavoriteCategoryModal,
        modalContent: favoriteCategoryModalContent,
    } = useJSXModal(FavoriteCategoryModal);

    const {
        doModal: doUserProfileModal,
        modalContent: userProfileModalContent,
    } = useJSXModal(UserProfileModal, () => userProfileModalProps);

    const onHeaderMenuItemAvatarClick: HeaderMenuItemAvatarClickCallback =
        useCallback(
            ({ avatarEl }) => {
                const rect = callElementBoundingClientRect(avatarEl);
                userProfileModalProps.left = rect.left + rect.width - 10;
                userProfileModalProps.top = rect.top;
                doUserProfileModal();
            },
            [doUserProfileModal],
        );

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    return (
        <div id="app">
            <Header onHeaderMenuItemAvatarClick={onHeaderMenuItemAvatarClick} />
            <CategoryMenu onFavoriteCategoryClick={doFavoriteCategoryModal} />
            {favoriteCategoryModalContent}
            {userProfileModalContent}
            <Suspense fallback={<div>Loading....</div>}>
                <AppRouter />
            </Suspense>
        </div>
    );
});

export default withTheme(App);
