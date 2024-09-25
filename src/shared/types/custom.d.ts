import { BaseSyntheticEvent } from 'react';

export type AnchorEvent = BaseSyntheticEvent<
    MouseEvent,
    EventTarget & HTMLAnchorElement,
    EventTarget
>;
