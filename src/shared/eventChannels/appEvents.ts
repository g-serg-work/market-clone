import eventBus from '@/shared/lib/helpers/EventBus';

export type AppEvent = {
    source: 'keyboard' | 'mouse';
    elementBoundingClientRect: DOMRect;
};

export enum AppEventTypes {
    onCategoryMenuFavoriteCategoryItemClick = 'onCategoryMenuFavoriteCategoryItemClick',
    onHeaderMenuItemAvatarClick = 'onHeaderMenuItemAvatarClick',
}

export type onClickTypeVoid = () => void;
export type onClickTypeAppEvent = (appEvent: AppEvent) => void;

export type onClickType = onClickTypeVoid | onClickTypeAppEvent;

export const AppEventChannel = eventBus<{
    [AppEventTypes.onCategoryMenuFavoriteCategoryItemClick]: onClickTypeVoid;
    [AppEventTypes.onHeaderMenuItemAvatarClick]: onClickTypeAppEvent;
}>();
