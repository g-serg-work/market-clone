import eventBus from '@/shared/lib/helpers/EventBus';
import { AppEventCallbackVoid, AppEventCallbackEvent } from './types';

export enum modalChannelEvent {
    onCategoryMenuFavoriteCategoryItemClick = 'onCategoryMenuFavoriteCategoryItemClick',
    onHeaderMenuItemAvatarClick = 'onHeaderMenuItemAvatarClick',
    onHeaderMenuItemLoginClick = 'onHeaderMenuItemLoginClick',
    onRequireAuthPageLoginClick = 'onRequireAuthPageLoginClick',
    onUserProfileItemClick = 'onUserProfileItemClick',
    onUserLoginSuccess = 'onUserLoginSuccess',
}

export const modalChannel = eventBus<{
    [modalChannelEvent.onCategoryMenuFavoriteCategoryItemClick]: AppEventCallbackVoid;
    [modalChannelEvent.onHeaderMenuItemAvatarClick]: AppEventCallbackEvent;
    [modalChannelEvent.onHeaderMenuItemLoginClick]: AppEventCallbackVoid;
    [modalChannelEvent.onRequireAuthPageLoginClick]: AppEventCallbackVoid;
    [modalChannelEvent.onUserProfileItemClick]: AppEventCallbackVoid;
    [modalChannelEvent.onUserLoginSuccess]: AppEventCallbackVoid;
}>();
