import { JsonSettings } from './jsonSettings';

export type UserId = string;

export interface User {
    id: UserId;
    username: string;
    avatar?: string;
    jsonSettings?: JsonSettings;
    orders?: number;
    theme?: string;
    hasNotification?: boolean;
    wishList?: string[];
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
