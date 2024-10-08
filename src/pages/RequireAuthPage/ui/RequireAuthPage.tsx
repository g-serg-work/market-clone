import { MouseEvent, useCallback } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './RequireAuthPage.module.scss';
import { Page } from '@/widgets/Page';

interface RequireAuthPageProps {
    className?: string;
    onAuthClick?: () => void;
}

export const RequireAuthPage = (props: RequireAuthPageProps) => {
    const { className, onAuthClick } = props;

    const onClick = useCallback(
        (e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            onAuthClick?.();
        },
        [onAuthClick],
    );

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
