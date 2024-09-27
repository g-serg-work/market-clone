import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderDesktopMenu.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import { CartHeaderDesktopItem } from '@/shared/ui/CartHeaderDesktopItem';
import { OrdersHeaderDesktopItem } from '@/shared/ui/OrdersHeaderDesktopItem';
import { WishListHeaderDesktopItem } from '@/shared/ui/WishListHeaderDesktopItem';
import { PlusHeaderDesktopItem } from '@/shared/ui/PlusHeaderDesktopItem';

export interface HeaderDesktopMenuProps {
    className?: string;
}

export const HeaderDesktopMenu = memo((props: HeaderDesktopMenuProps) => {
    const { className } = props;

    const items = [
        <PlusHeaderDesktopItem />,
        <OrdersHeaderDesktopItem />,
        <WishListHeaderDesktopItem />,
        <CartHeaderDesktopItem />,
        <Avatar hasNotification />,
    ];

    return (
        <nav className={classNames(cls.HeaderDesktopMenu, {}, [className])}>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </nav>
    );
});
