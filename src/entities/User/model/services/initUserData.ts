import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getUserDataQuery } from '../../api/userApi';
import { User } from '../types/user';

export const initUserData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initUserData',
    async (_, thunkApi) => {
        const { rejectWithValue, dispatch } = thunkApi;

        try {
            const response = await dispatch(getUserDataQuery()).unwrap();

            return response;
        } catch (e) {
            return rejectWithValue('');
        }
    },
);
