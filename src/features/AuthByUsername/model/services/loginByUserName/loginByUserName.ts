import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

interface loginByUserNameProps {
    userName: string;
}

export const loginByUserName = createAsyncThunk<
    User,
    loginByUserNameProps,
    ThunkConfig<string>
>('login/loginByUserName', async (userData, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    if (userData.userName.trim().length === 0) {
        throw rejectWithValue('Empty user name');
    }

    try {
        const response = await extra.api.post<User>('/login', userData);

        if (!response.data) {
            throw new Error('No data');
        }

        dispatch(userActions.setUserData(response.data));
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return rejectWithValue(error.message);
        }

        console.log('unexpected error: ', error);
        return rejectWithValue('An unexpected error occurred');
    }
});
