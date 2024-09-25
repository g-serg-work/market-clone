import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './RequireAuthPage.module.scss';
import { useCallback } from 'react';
import { AnchorEvent } from '@/shared/types/custom';

interface RequireAuthPageProps {
    className?: string;
    onAuthClick?: () => void;
}

export const RequireAuthPage = (props: RequireAuthPageProps) => {
    const { className, onAuthClick } = props;

    const onClick = useCallback(
        (event: AnchorEvent) => {
            event.preventDefault();
            onAuthClick?.();
        },
        [onAuthClick],
    );

    return (
        <div
            data-testid="RequireAuthPage"
            className={classNames(cls.RequireAuthPage, {}, [className])}
        >
            <div className={cls.wrapper}>
                <h1>Войдите в аккаунт</h1>
                <span>
                    И тогда сможете посмотреть свои заказы, если они были
                </span>
            </div>
            <a role="button" tabIndex={0} href="/" onClick={onClick}>
                <span>Войти</span>
            </a>
        </div>
    );
};
