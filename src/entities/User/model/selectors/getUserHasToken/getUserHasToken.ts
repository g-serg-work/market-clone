import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export const getUserHasToken = (): boolean =>
    !!localStorage.getItem(USER_LOCALSTORAGE_KEY);
