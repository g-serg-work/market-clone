import { rtkApi } from '@/shared/api/rtkApi';
import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/user';

interface SetJsonSettingsArg {
    jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserData: build.query<User, void>({
            query: () => ({
                url: `/profile`,
                method: 'GET',
            }),
        }),
        setJsonSettings: build.mutation<User, SetJsonSettingsArg>({
            query: ({ jsonSettings }) => ({
                url: `/profile`,
                method: 'PATCH',
                body: {
                    jsonSettings,
                },
            }),
        }),
    }),
});

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;

export const getUserDataQuery = userApi.endpoints.getUserData.initiate;
