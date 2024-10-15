import { FormEventHandler, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { loginReducer } from '../../model/slice/loginSlice';
import {
    ReducersList,
    DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader';

import cls from './LoginForm.module.scss';
import { PreviousStepButton } from './ui/LoginForm.PreviousStepButton';
import { LayoutHead } from './ui/LoginForm.LayoutHead';
import { LayoutContent } from './ui/LoginForm.LayoutContent';
import { RegisterButton } from './ui/LoginForm.RegisterButton';
import { AllSocialBlock } from './ui/LoginForm.AllSocialBlock';
import { WebAuthButton } from './ui/LoginForm.WebAuthButton';
import { FormWrapper } from './ui/LoginForm.FormWrapper';
import { Promo } from './ui/LoginForm.Promo';
import { SignInButton } from './ui/LoginForm.SignInButton';
import { LoginHeader } from './ui/LoginForm.LoginHeader';
import { FormFieldInput } from './ui/LoginForm.FormFieldInput';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { useAppDispatch } from '@/shared/lib/hooks';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { PageOverlay } from './ui/LoginForm.PageOverlay';

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

    const onSubmit = useCallback<FormEventHandler<HTMLFormElement>>(
        async (e) => {
            e.preventDefault();

            const result = await dispatch(loginByUserName({ userName }));
            if (result.meta.requestStatus === 'fulfilled') {
                onClose?.();
            }
        },
        [dispatch, userName, onClose],
    );

    const form = (
        <FormWrapper>
            <form onSubmit={onSubmit}>
                <div className={cls.layoutContainer}>
                    <LayoutHead />
                    <LayoutContent>
                        <FormFieldInput autoFocus={autoFocus} />
                    </LayoutContent>
                    <div className={cls.layoutControls}>
                        <SignInButton isLoading={isLoading} />
                        <WebAuthButton />
                        <RegisterButton />
                        <AllSocialBlock />
                    </div>
                </div>
            </form>
        </FormWrapper>
    );

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={cls.passpFlexWrapper}>
                <div className={cls.passpContent}>
                    <div className={cls.passpAuth}>
                        <PageOverlay isLoading={isLoading} />
                        <PreviousStepButton onClose={onClose} />
                        <div className={cls.passpAuthContent}>
                            <LoginHeader />
                            <div className={cls.passpPageVisibility} />
                            {form}
                        </div>
                        <Promo />
                    </div>
                </div>
            </div>
        </DynamicModuleLoader>
    );
});
