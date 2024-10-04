import { JsonSettings } from './jsonSettings';

export type UserId = string;

export interface User {
    id: UserId;
    userName: string;
    userEmail: string;
    avatar?: string;
    jsonSettings?: JsonSettings;
    orders?: number;
    theme?: string;
    hasNotification?: boolean;
    wishList?: string[];
    ordersList?: string[];
    cartList?: string[];
    favoriteCategory?: { hint: string; selected: string[] };
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
