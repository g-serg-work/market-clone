import eventBus from '@/shared/lib/helpers/EventBus';

export enum modalChannelEvent {
    showFavoriteCategoryModal = 'showFavoriteCategoryModal',
    showUserProfileModal = 'showUserProfileModal',
    showLoginModal = 'showLoginModal',
}

export const modalChannel = eventBus<{
    [modalChannelEvent.showFavoriteCategoryModal]: () => void;
    [modalChannelEvent.showUserProfileModal]: () => void;
    [modalChannelEvent.showLoginModal]: () => void;
}>();
