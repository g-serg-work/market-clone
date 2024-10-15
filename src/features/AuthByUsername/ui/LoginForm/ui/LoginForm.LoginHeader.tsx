import cls from '../LoginForm.module.scss';
import IdLogoSvg from '../../assets/icons/id-logo.svg';

export const LoginHeader = () => {
    return (
        <div className={cls.header}>
            <div className={cls.headerSideBlock} />
            <div className={cls.headerYaLogoBlock} dir="ltr">
                <a
                    aria-label="Яндекс"
                    className={cls.headerLogo}
                    href="https://ya.ru"
                    tabIndex={-1}
                >
                    <IdLogoSvg aria-hidden="true" focusable="false" />
                </a>
            </div>
            <div className={cls.HeaderSideBlock} />
        </div>
    );
};
