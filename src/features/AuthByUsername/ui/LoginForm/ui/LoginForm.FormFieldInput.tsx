import { useCallback, ChangeEvent, memo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks';
import { loginActions } from '../../../model/slice/loginSlice';
import { getLoginUsername } from '../../../model/selectors/getLoginUsername/getLoginUsername';
import cls from '../LoginForm.module.scss';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import FieldErrorSvg from '../../assets/icons/field-error.svg';
import classNames, { Mods } from '@/shared/lib/helpers/classNames';
import { LoginUserErrorInfo } from './LoginForm.LoginUserErrorInfo';
import { getLoginError } from '../../../model/selectors/getLoginError/getLoginError';

interface FormFieldInputProps {
    autoFocus?: boolean;
}

export const FormFieldInput = memo((props: FormFieldInputProps) => {
    const { autoFocus } = props;
    const dispatch = useAppDispatch();
    const userName = useSelector(getLoginUsername);
    const error = useSelector(getLoginError);
    const { autoFocusRef } = useAutoFocus<HTMLInputElement>();

    const onChangeUsername = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(loginActions.setUserName(e.target.value));
        },
        [dispatch],
    );

    const mods: Mods = {
        [cls.textInputStateError]: error,
    };

    return (
        <div
            className={cls.authLoginInputToggleLoginField}
            data-t="field:login"
        >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label
                className={cls.authLoginInputToggleLoginFieldLabel}
                data-t="field:label-login"
                htmlFor="passp-field-login"
            >
                Введите ваш ID
            </label>
            <div className={cls.fieldInputWrapper}>
                {error && <FieldErrorSvg className={cls.fieldErrorIcon} />}
                <span className={classNames(cls.textInput, mods, [])}>
                    <input
                        ref={autoFocus ? autoFocusRef : undefined}
                        data-t="field:input-login"
                        dir="ltr"
                        aria-invalid="false"
                        autoCorrect="off"
                        autoCapitalize="off"
                        autoComplete="username"
                        className={cls.textInputControl}
                        id="passp-field-login"
                        name="login"
                        placeholder="Логин или email"
                        type="text"
                        onChange={onChangeUsername}
                        value={userName}
                    />
                    <span className={cls.textInputBox} />
                </span>
                {error && <LoginUserErrorInfo error={error} />}
            </div>
        </div>
    );
});
