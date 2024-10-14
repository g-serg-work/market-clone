import { lazy, Suspense } from 'react';
import { LoginFormProps } from './LoginForm';

const LoginFormLazy = lazy(() =>
    import('./LoginForm').then((module) => ({
        default: module.LoginForm,
    })),
);

export const LoginFormAsync = (props: LoginFormProps) => {
    return (
        <Suspense>
            <LoginFormLazy {...props} />
        </Suspense>
    );
};
