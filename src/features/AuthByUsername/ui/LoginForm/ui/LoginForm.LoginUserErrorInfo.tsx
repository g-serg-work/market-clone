import { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from '../LoginForm.module.scss';

interface LoginUserErrorInfoProps {
    error: string;
}

const EncodeError = (error: string) => {
    switch (error) {
        case 'Empty user name':
            return 'Логин не указан';
        case 'User not found':
            return 'Нет такого аккаунта. Проверьте логин или войдите по телефону';
        default:
    }
    return error;
};

export const LoginUserErrorInfo = memo((props: LoginUserErrorInfoProps) => {
    const { error } = props;
    const isEmptyLogin = error === 'Empty user name';

    return (
        <>
            <div
                id="field:input-login:hint"
                data-t="field:input-login:hint"
                aria-live="polite"
                className={cls.textInputHintStateError}
            >
                {EncodeError(error)}
            </div>
            {!isEmptyLogin && (
                <div
                    className={cls.fieldLink}
                    data-t="field:link-login"
                    id="field:link-login"
                >
                    <Link data-t="link:default" to="/auth/restore/login">
                        Напомнить логин
                    </Link>
                </div>
            )}
        </>
    );
});
