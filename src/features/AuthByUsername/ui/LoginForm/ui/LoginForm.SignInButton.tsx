import { memo } from 'react';
import cls from '../LoginForm.module.scss';

interface SignInButtonProps {
    isLoading?: boolean;
}

export const SignInButton = memo((props: SignInButtonProps) => {
    const { isLoading } = props;

    return (
        <div className={cls.passpSignInButtonWrapper}>
            <button
                data-t="button:action:passp:sign-in"
                id="passp:sign-in"
                type="submit"
                className={cls.passpSignInButton}
                aria-disabled="false"
                autoComplete="off"
                disabled={isLoading}
            >
                <span className={cls.buttonText}>Войти</span>
            </button>
        </div>
    );
});
