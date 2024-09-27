import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './OrdersHeaderDesktopItem.module.scss';

export interface OrdersHeaderDesktopItemProps {
    className?: string;
}

export const OrdersHeaderDesktopItem = memo((props: OrdersHeaderDesktopItemProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.OrdersHeaderDesktopItem, {}, [className])}>Заказы</div>
    );
});
