export type AppEvent = {
    source: 'keyboard' | 'mouse';
    elementBoundingClientRect: DOMRect;
};

export type AppEventCallbackVoid = () => void;
export type AppEventCallbackEvent = (appEvent: AppEvent) => void;

export type AppEventCallbackType = AppEventCallbackVoid | AppEventCallbackEvent;
