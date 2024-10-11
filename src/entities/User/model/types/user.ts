import { JsonSettings } from './jsonSettings';

export type UserId = string;

export interface User {
    id: UserId;
    userName: string;
    userEmail: string;
    addressList?: string[];
    jsonSettings?: JsonSettings;
    orders?: number;
    hasNotification?: boolean;
    wishList?: string[];
    ordersList?: string[];
    cartList?: string[];
    favoriteCategory?: { hint: string; selected: string[] };
}

export interface UserSchema {
    userData?: User;

    _inited: boolean;
}
