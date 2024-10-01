import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderDesktopMenu.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import { CartHeaderDesktopItem } from '@/shared/ui/CartHeaderDesktopItem';
import { OrdersHeaderDesktopItem } from '@/shared/ui/OrdersHeaderDesktopItem';
import { WishListHeaderDesktopItem } from '@/shared/ui/WishListHeaderDesktopItem';
import { PlusHeaderDesktopItem } from '@/shared/ui/PlusHeaderDesktopItem';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';

export interface HeaderDesktopMenuProps {
    className?: string;
    onAvatarClick?: () => void;
}

export const HeaderDesktopMenu = memo((props: HeaderDesktopMenuProps) => {
    const { className, onAvatarClick } = props;

    const userData = useSelector(getUserAuthData);

    const hasNotification = userData?.hasNotification;
    const wishListCount = userData?.wishList?.length;

    const items = [
        <PlusHeaderDesktopItem />,
        <OrdersHeaderDesktopItem />,
        <WishListHeaderDesktopItem count={wishListCount} />,
        <CartHeaderDesktopItem />,
        <Avatar hasNotification={hasNotification} onClick={onAvatarClick} />,
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
