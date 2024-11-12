import eventBus from '@/shared/lib/helpers/EventBus';

export enum elementOnChannelEvent {
    footerOnScreen = 'footerOnScreen',
}

export const elementOnScreenChannel = eventBus<{
    [elementOnChannelEvent.footerOnScreen]: (onScreen: boolean) => void;
}>();
