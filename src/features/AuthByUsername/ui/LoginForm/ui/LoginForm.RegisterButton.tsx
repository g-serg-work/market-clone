import cls from '../LoginForm.module.scss';

export const RegisterButton = () => (
    <div
        className={cls.passpRegisterButtonWrapper}
        style={{ position: 'relative', display: 'block' }}
    >
        {/* eslint-disable-next-line jsx-a11y/role-supports-aria-props */}
        <a
            data-t="button:pseudo:passp:register"
            id="passp:register"
            aria-expanded="false"
            aria-haspopup="true"
            href="https://passport.yandex.ru/registration"
            className={cls.passpRegisterButton}
        >
            <span className={cls.buttonText}>Создать ID</span>
        </a>
    </div>
);
