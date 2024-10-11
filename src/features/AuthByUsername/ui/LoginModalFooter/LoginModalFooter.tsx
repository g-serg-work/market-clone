// import { Modal } from '@/shared/ui/Modal';
// import classNames from '@/shared/lib/helpers/classNames';
// import { LoginFormAsync } from '../LoginForm/LoginForm.async';

import cls from './LoginModalFooter.module.scss';

export const LoginModalFooter = () => (
    <footer className={cls.AuthFooter}>
        <div className={cls.AuthFooterWrapper}>
            <div className={cls.AuthFooterIncognitoLink}>
                <span className={cls.AuthFooterItem}>
                    <a
                        href="https://yandex.ru/support/common/browsers-settings/incognito.html"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className={cls.Link}
                    >
                        Используйте режим инкогнито на чужом компьютере
                    </a>
                </span>
            </div>
            <div className={cls.AuthFooterMainBlock}>
                <span className={cls.AuthFooterItem} aria-expanded="false">
                    <span className={cls.LinkPseudo}>Ru</span>
                </span>
                <span className={cls.AuthFooterItem}>
                    <a
                        href="https://yandex.ru/support/passport/"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className={cls.Link}
                    >
                        Справка и поддержка
                    </a>
                </span>
                <span className={cls.AuthFooterItem}>
                    <span className={cls.AuthFooterCopyright}>
                        © 2001-2024{', '}
                    </span>
                    <a href="https://ya.ru" className={cls.Link}>
                        Яндекс
                    </a>
                </span>
            </div>
        </div>
    </footer>
);
