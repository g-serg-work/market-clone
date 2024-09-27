import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './CartHeaderDesktopItem.module.scss';

export interface CartHeaderDesktopItemProps {
    className?: string;
}

export const CartHeaderDesktopItem = memo((props: CartHeaderDesktopItemProps) => {
    const { className } = props;

    return <div className={classNames(cls.CartHeaderDesktopItem, {}, [className])}>Корзина</div>;
});
