import { useEffect } from 'react';
import { FavoriteCategoryModal } from '@/features/FavoriteCategory';
import {
    modalChannel,
    modalChannelEvent,
} from '@/shared/eventChannels/modalChannelEvents';
import useJSXModal from '@/shared/lib/hooks/useJSXModal';
import { UserProfileModal } from '@/widgets/UserProfile';
import { LoginModal } from '@/features/AuthByUsername';

const userProfileModalProps = { left: 0, top: 0 };

export const useAppModals = (): JSX.Element | null => {
    const [doFavoriteCategoryModal, favoriteCategoryModalContent] = useJSXModal(
        FavoriteCategoryModal,
    );

    const [doUserProfileModal, userProfileModalContent, closeUserProfileModal] =
        useJSXModal(UserProfileModal, () => userProfileModalProps);

    const [doLoginModal, loginModalContent, closeLoginModal] =
        useJSXModal(LoginModal);

    useEffect(() => {
        const unsubscribes = [
            modalChannel.on(
                modalChannelEvent.onCategoryMenuFavoriteCategoryItemClick,
                doFavoriteCategoryModal,
            ),
            modalChannel.on(
                modalChannelEvent.onHeaderMenuItemLoginClick,
                doLoginModal,
            ),
            modalChannel.on(
                modalChannelEvent.onRequireAuthPageLoginClick,
                doLoginModal,
            ),
            modalChannel.on(
                modalChannelEvent.onHeaderMenuItemAvatarClick,
                (e) => {
                    const rect = e.elementBoundingClientRect;
                    userProfileModalProps.left = rect.left + rect.width - 10;
                    userProfileModalProps.top = rect.top;
                    doUserProfileModal();
                },
            ),
            modalChannel.on(modalChannelEvent.onUserProfileItemClick, () =>
                closeUserProfileModal?.(),
            ),
            modalChannel.on(modalChannelEvent.onUserLoginSuccess, () => {
                closeLoginModal?.();
            }),
        ];

        return () => {
            unsubscribes.forEach((c) => c());
        };
    }, [
        doFavoriteCategoryModal,
        doUserProfileModal,
        doLoginModal,
        closeUserProfileModal,
        closeLoginModal,
    ]);

    return (
        favoriteCategoryModalContent ||
        userProfileModalContent ||
        loginModalContent
    );
};
