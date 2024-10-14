import { ChangeEvent, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import cls from './LoginForm.module.scss';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import {
    ReducersList,
    DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';

export interface LoginFormProps {
    className?: string;
    autoFocus?: boolean;
    onClose?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

export const LoginForm = memo((props: LoginFormProps) => {
    const { className, autoFocus, onClose } = props;
    const dispatch = useAppDispatch();
    const userName = useSelector(getLoginUsername);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    const { autoFocusRef } = useAutoFocus<HTMLInputElement>();

    const onChangeUsername = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setUserName(e.target.value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUserName({ userName }));
        if (result.meta.requestStatus === 'fulfilled') {
            onClose?.();
        }
    }, [dispatch, userName, onClose]);

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={cls.wrapper} />
            <div>Форма авторизации</div>
            {error && <div>Вы ввели неверный логин</div>}
            <input
                ref={autoFocus ? autoFocusRef : undefined}
                type="text"
                className={cls.input}
                placeholder="Введите username"
                onChange={onChangeUsername}
                value={userName}
            />
            <button
                type="button"
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                Войти
            </button>
        </DynamicModuleLoader>
    );
});
