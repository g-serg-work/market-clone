import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { userName: '123' };
        expect(loginReducer(state as LoginSchema, loginActions.setUserName('123123'))).toEqual({
            userName: '123123',
        });
    });
});
