import { useEffect } from 'react';
import { FavoriteCategoryModal } from '@/features/FavoriteCategory';
import {
    AppEventChannel,
    AppEventTypes,
} from '@/shared/eventChannels/appEvents';
import useJSXModal from '@/shared/lib/hooks/useJSXModal';
import { UserProfileModal } from '@/widgets/UserProfile';

const userProfileModalProps = { left: 0, top: 0 };

export const useAppModals = (): JSX.Element | null => {
    const [doFavoriteCategoryModal, favoriteCategoryModalContent] = useJSXModal(
        FavoriteCategoryModal,
    );

    const [doUserProfileModal, userProfileModalContent] = useJSXModal(
        UserProfileModal,
        () => userProfileModalProps,
    );

    useEffect(() => {
        const unsubscribes = [
            AppEventChannel.on(
                AppEventTypes.onCategoryMenuFavoriteCategoryItemClick,
                doFavoriteCategoryModal,
            ),
            AppEventChannel.on(
                AppEventTypes.onHeaderMenuItemAvatarClick,
                (e) => {
                    const rect = e.elementBoundingClientRect;
                    userProfileModalProps.left = rect.left + rect.width - 10;
                    userProfileModalProps.top = rect.top;
                    doUserProfileModal();
                },
            ),
        ];

        return () => {
            unsubscribes.forEach((c) => c());
        };
    }, [doFavoriteCategoryModal, doUserProfileModal]);

    return favoriteCategoryModalContent || userProfileModalContent;
};
