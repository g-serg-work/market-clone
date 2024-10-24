import { User, userActions } from '@/entities/User';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { loginByUserName, loginByUserNameProps } from './loginByUserName';

describe('loginByUserName.test', () => {
    test('success login', async () => {
        const loginData: loginByUserNameProps = { userName: '123' };
        const userData: User = { userName: '123', token: '456' };

        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));
        const result = await thunk.callThunk(loginData);

        expect(thunk.dispatch).toHaveBeenCalledWith(
            userActions.setUserData(userData),
        );
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUserName);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({
            userName: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('An unexpected error occurred');
    });
});
