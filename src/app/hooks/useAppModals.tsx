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

type useAppModalsResult = {
    modalContent: JSX.Element | null;
    exclusiveMode: boolean;
};

export const useAppModals = (): useAppModalsResult => {
    const [doFavoriteCategoryModal, favoriteCategoryModalContent] = useJSXModal(
        FavoriteCategoryModal,
    );

    const [doUserProfileModal, userProfileModalContent] = useJSXModal(
        UserProfileModal,
        () => userProfileModalProps,
    );

    const [doLoginModal, loginModalContent] = useJSXModal(LoginModal);

    let exclusiveMode = false;

    useEffect(() => {
        const unsubscribes = [
            modalChannel.on(
                modalChannelEvent.showFavoriteCategoryModal,
                doFavoriteCategoryModal,
            ),
            modalChannel.on(modalChannelEvent.showLoginModal, () => {
                exclusiveMode = true;
                doLoginModal();
            }),
            modalChannel.on(modalChannelEvent.showUserProfileModal, (e) => {
                const rect = e.elementBoundingClientRect;
                userProfileModalProps.left = rect.left + rect.width - 10;
                userProfileModalProps.top = rect.top;
                doUserProfileModal();
            }),
        ];

        return () => {
            unsubscribes.forEach((c) => c());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const modalContent =
        favoriteCategoryModalContent ||
        userProfileModalContent ||
        loginModalContent;

    return {
        modalContent,
        exclusiveMode,
    };
};
