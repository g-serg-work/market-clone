import { ReactNode } from 'react';
import cls from '../LoginForm.module.scss';

export const FormWrapper = ({ children }: { children: ReactNode }) => (
    <div className={cls.passpRouteBack}>
        <div className={cls.passpRoute}>
            <div data-t="page:add-account" className={cls.passpAuthScreen}>
                <div className={cls.passpLoginForm}>{children}</div>
            </div>
        </div>
    </div>
);
