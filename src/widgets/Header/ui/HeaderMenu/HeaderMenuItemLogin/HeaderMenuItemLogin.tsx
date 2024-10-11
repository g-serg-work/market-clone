import { useCallback } from 'react';
import cls from './HeaderMenuItemLogin.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import {
    modalChannel,
    modalChannelEvent,
} from '@/shared/eventChannels/modalChannelEvents';

interface HeaderMenuItemLoginProps {
    className?: string;
}

export const HeaderMenuItemLogin = (props: HeaderMenuItemLoginProps) => {
    const { className } = props;

    const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        modalChannel.emit(modalChannelEvent.onHeaderMenuItemLoginClick);
    }, []);

    return (
        <div
            className={classNames(cls.HeaderMenuItemLogin, {}, [className])}
            data-zone-name="headerLoginButton"
            data-cs-name="navigate"
        >
            <a
                className={classNames('', {}, [cls.link, 'button-focus-ring'])}
                href="/"
                onClick={onClick}
            >
                Войти
            </a>
        </div>
    );
};
