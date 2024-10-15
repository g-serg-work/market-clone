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
    } catch (e) {
        // TODO: fix typescript types
        if (e && typeof e === 'object' && 'response' in e) {
            const { response } = e;
            if (
                response &&
                typeof response === 'object' &&
                'data' in response
            ) {
                const { data } = response;
                if (data && typeof data === 'object' && 'message' in data)
                    return rejectWithValue(data.message as string);
            }
        }

        return rejectWithValue('Error');
    }
});
