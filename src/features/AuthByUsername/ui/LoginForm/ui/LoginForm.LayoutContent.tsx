import { memo, ReactNode } from 'react';
import cls from '../LoginForm.module.scss';

interface LayoutContentProps {
    children: ReactNode;
}

export const LayoutContent = memo((props: LayoutContentProps) => {
    const { children } = props;

    return (
        <div className={cls.layoutContent}>
            <div className={cls.authLoginInputToggleWrapper}>
                <div className={cls.authLoginInputToggleType}>
                    <button
                        data-t="button:default"
                        data-type="login"
                        type="button"
                        className={cls.buttonViewDefault}
                        aria-pressed="true"
                        autoComplete="off"
                    >
                        <span className={cls.buttonText}>Почта</span>
                    </button>
                </div>
                <div className={cls.authLoginInputToggleType}>
                    <button
                        data-t="button:clear"
                        data-type="phone"
                        type="button"
                        className={cls.buttonClear}
                        aria-pressed="false"
                        autoComplete="off"
                    >
                        <span className={cls.buttonText}>Телефон</span>
                    </button>
                </div>
            </div>
            <div className={cls.authLoginInputToggleInput}>{children}</div>
            <input
                className={cls.passpHiddenPasswordField}
                type="password"
                id="hiddenPassword"
                name="hidden-password"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
            />
        </div>
    );
});
