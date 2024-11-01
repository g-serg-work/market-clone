import { useEffect, useRef } from 'react';
import { FavoriteCategoryModal } from '@/features/FavoriteCategory';
import {
    modalChannel,
    modalChannelEvent,
} from '@/shared/eventsChannels/modalEventsChannel';
import { useJSXModal } from '@/shared/lib/hooks/useJSXModal';
import { UserProfileModal } from '@/widgets/UserProfile';
import { LoginModal } from '@/features/AuthByUsername';
import { callElementBoundingClientRect } from '@/shared/lib/helpers/callElementBoundingClientRect';

type useAppModalsResult = {
    modalContent: JSX.Element | null;
};

export const useAppModals = (): useAppModalsResult => {
    const userProfileModalProps = useRef({ left: 0, top: 0 });

    const [doFavoriteCategoryModal, favoriteCategoryModalContent] = useJSXModal(
        FavoriteCategoryModal,
    );

    const [doUserProfileModal, userProfileModalContent] = useJSXModal(
        UserProfileModal,
        () => userProfileModalProps.current,
    );

    const [doLoginModal, loginModalContent] = useJSXModal(LoginModal);

    useEffect(() => {
        const unsubscribes = [
            modalChannel.on(
                modalChannelEvent.showFavoriteCategoryModal,
                doFavoriteCategoryModal,
            ),
            modalChannel.on(modalChannelEvent.showLoginModal, doLoginModal),
            modalChannel.on(modalChannelEvent.showUserProfileModal, () => {
                const el = document.getElementById('headerMenuItemAvatar');
                if (!el) return;

                const rect = callElementBoundingClientRect(el);
                userProfileModalProps.current.left =
                    rect.left + rect.width - 10;
                userProfileModalProps.current.top = rect.top;
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
    };
};
