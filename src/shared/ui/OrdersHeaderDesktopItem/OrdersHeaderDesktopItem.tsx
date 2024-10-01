import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/classNames';
import cls from './OrdersHeaderDesktopItem.module.scss';
import Svg from '../../assets/icons/orders.svg';

export interface OrdersHeaderDesktopItemProps {
    className?: string;
    count?: number;
}

export const OrdersHeaderDesktopItem = memo(
    (props: OrdersHeaderDesktopItemProps) => {
        const { className, count } = props;

        return (
            <div
                className={classNames(cls.OrdersHeaderDesktopItem, {}, [
                    className,
                ])}
            >
                <Link className={cls.link} to="/my/orders" rel="nofollow">
                    <div data-baobab-name="favorites">
                        <div className={cls.svgWrapper} aria-hidden="true">
                            <span className={cls.count}>{count}</span>
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
    },
);
