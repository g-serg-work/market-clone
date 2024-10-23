import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { setJsonSettingsMutation } from '../../api/userApi';
import { getUserData } from '../selectors/getUserData/getUserData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { JsonSettings } from '../types/jsonSettings';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>('user/saveJsonSettings', async (newJsonSettings, thunkApi) => {
    const { rejectWithValue, getState, dispatch } = thunkApi;
    const userData = getUserData(getState());
    const currentSettings = getJsonSettings(getState());

    if (!userData) {
        return rejectWithValue('');
    }

    try {
        const response = await dispatch(
            setJsonSettingsMutation({
                jsonSettings: {
                    ...currentSettings,
                    ...newJsonSettings,
                },
            }),
        ).unwrap();

        if (!response.jsonSettings) {
            return rejectWithValue('');
        }

        return response.jsonSettings;
    } catch (e) {
        return rejectWithValue('');
    }
});
