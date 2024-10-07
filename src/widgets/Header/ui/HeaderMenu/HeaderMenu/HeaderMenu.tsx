import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderMenu.module.scss';
import { getUserAuthData } from '@/entities/User';
import { useSelector } from 'react-redux';
import {
    HeaderMenuItemAvatarClickCallback,
    HeaderMenuItemAvatar,
} from '../HeaderMenuItemAvatar/HeaderMenuItemAvatar';
import { HeaderMenuItemOrders } from '../HeaderMenuItemOrders/HeaderMenuItemOrders';
import { HeaderMenuItemPlus } from '../HeaderMenuItemPlus/HeaderMenuItemPlus';
import { HeaderMenuItemWishList } from '../HeaderMenuItemWishList/HeaderMenuItemWishList';
import { HeaderMenuItemCart } from '../HeaderMenuItemCart/HeaderMenuItemCart';

export interface HeaderMenuProps {
    className?: string;
    onHeaderMenuItemAvatarClick?: HeaderMenuItemAvatarClickCallback;
}

export const HeaderMenu = memo((props: HeaderMenuProps) => {
    const { className, onHeaderMenuItemAvatarClick } = props;

    const userData = useSelector(getUserAuthData);

    const hasNotification = userData?.hasNotification;
    const ordersListCount = userData?.ordersList?.length;
    const wishListCount = userData?.wishList?.length;
    const cartListCount = userData?.cartList?.length;

    const items = [
        <HeaderMenuItemPlus />,
        <HeaderMenuItemOrders count={ordersListCount} />,
        <HeaderMenuItemWishList count={wishListCount} />,
        <HeaderMenuItemCart count={cartListCount} />,
        <HeaderMenuItemAvatar
            hasNotification={hasNotification}
            onClick={onHeaderMenuItemAvatarClick}
        />,
    ];

    return (
        <nav className={classNames(cls.HeaderMenu, {}, [className])}>
            <ul>
                {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        </nav>
    );
});
