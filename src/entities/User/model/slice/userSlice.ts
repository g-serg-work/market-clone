import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { initUserData } from '../services/initUserData';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, { payload }: PayloadAction<User>) => {
            state.userData = payload;
            localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.token);
        },
        logout: (state) => {
            state.userData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
        setInited: (state) => {
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.userData) {
                    state.userData.jsonSettings = payload;
                }
            },
        );
        builder.addCase(
            initUserData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.userData = payload;
                state._inited = true;
            },
        );
        builder.addCase(initUserData.rejected, (state) => {
            state._inited = true;
        });
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
