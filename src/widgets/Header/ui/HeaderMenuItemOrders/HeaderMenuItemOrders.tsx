import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './HeaderMenuItemOrders.module.scss';
import Svg from '../../assets/icons/orders.svg';
import { getRouteOrders } from '@/shared/const/router';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';

export interface HeaderMenuItemOrdersProps {
    className?: string;
    count?: number;
    autoFocus?: boolean;
}

export const HeaderMenuItemOrders = memo((props: HeaderMenuItemOrdersProps) => {
    const { className, count, autoFocus } = props;
    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    return (
        <div className={classNames(cls.HeaderMenuItemOrders, {}, [className])}>
            <Link
                ref={autoFocus ? autoFocusRef : undefined}
                className={cls.link}
                to={getRouteOrders()}
                rel="nofollow"
            >
                <div data-baobab-name="favorites">
                    <div className={cls.svgWrapper} aria-hidden="true">
                        {count ? (
                            <span className={cls.count}>{count}</span>
                        ) : null}
                        <div className={cls.icon}>
                            <Svg title="Коробка обновленная" />
                        </div>
                    </div>
                </div>
                <div
                    className={cls.titleWrapper}
                    role="alert"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    Заказы
                    <span className="ds-visuallyHidden">{count}</span>
                </div>
            </Link>
        </div>
    );
});
