import { MouseEvent, useCallback } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './RequireAuthPage.module.scss';
import { Page } from '@/widgets/Page';
import {
    modalChannel,
    modalChannelEvent,
} from '@/shared/eventChannels/modalChannelEvents';

export interface RequireAuthPageProps {
    className?: string;
}

export const RequireAuthPage = (props: RequireAuthPageProps) => {
    const { className } = props;

    const onClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        modalChannel.emit(modalChannelEvent.showLoginModal);
    }, []);

    return (
        <Page
            data-testid="RequireAuthPage"
            className={classNames(cls.RequireAuthPage, {}, [className])}
        >
            <div className={cls.wrapper}>
                <div className={cls.info}>
                    <h1>Войдите в аккаунт</h1>
                    <span>
                        И тогда сможете посмотреть свои заказы, если они были
                    </span>
                </div>
                <a role="button" tabIndex={0} href="/" onClick={onClick}>
                    <span>Войти</span>
                </a>
            </div>
        </Page>
    );
};
