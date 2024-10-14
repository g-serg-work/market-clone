import eventBus from '@/shared/lib/helpers/EventBus';
import { AppEventCallbackVoid, AppEventCallbackEvent } from './types';

export enum modalChannelEvent {
    showFavoriteCategoryModal = 'showFavoriteCategoryModal',
    showUserProfileModal = 'showUserProfileModal',
    showLoginModal = 'showLoginModal',
}

export const modalChannel = eventBus<{
    [modalChannelEvent.showFavoriteCategoryModal]: AppEventCallbackVoid;
    [modalChannelEvent.showUserProfileModal]: AppEventCallbackEvent;
    [modalChannelEvent.showLoginModal]: AppEventCallbackVoid;
}>();
