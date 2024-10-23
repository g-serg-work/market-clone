import { JsonSettings } from './jsonSettings';

export type UserToken = string;

export interface User {
    token: UserToken;
    userName: string;
    userEmail?: string;
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
