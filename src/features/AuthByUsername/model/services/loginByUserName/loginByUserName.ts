import { createAsyncThunk } from '@reduxjs/toolkit';
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

    try {
        const response = await extra.api.post<User>('/login', userData);

        if (!response.data) {
            throw new Error();
        }

        dispatch(userActions.setUserData(response.data));
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
