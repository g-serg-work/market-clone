import { memo } from 'react';
import { useSelector } from 'react-redux';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './HeaderMenu.module.scss';
import { getUserData } from '@/entities/User';
import { HeaderMenuItemAvatar } from '../HeaderMenuItemAvatar/HeaderMenuItemAvatar';
import { HeaderMenuItemOrders } from '../HeaderMenuItemOrders/HeaderMenuItemOrders';
import { HeaderMenuItemPlus } from '../HeaderMenuItemPlus/HeaderMenuItemPlus';
import { HeaderMenuItemWishList } from '../HeaderMenuItemWishList/HeaderMenuItemWishList';
import { HeaderMenuItemCart } from '../HeaderMenuItemCart/HeaderMenuItemCart';
import { HeaderMenuItemLogin } from '../HeaderMenuItemLogin/HeaderMenuItemLogin';

export interface HeaderMenuProps {
    className?: string;
}

export const HeaderMenu = memo((props: HeaderMenuProps) => {
    const { className } = props;

    const userData = useSelector(getUserData);

    const hasNotification = userData?.hasNotification;
    const ordersListCount = userData?.ordersList?.length;
    const wishListCount = userData?.wishList?.length;
    const cartListCount = userData?.cartList?.length;

    const items = [
        <HeaderMenuItemPlus />,
        <HeaderMenuItemOrders count={ordersListCount} />,
        <HeaderMenuItemWishList count={wishListCount} />,
        <HeaderMenuItemCart count={cartListCount} />,
    ].concat(
        userData
            ? [<HeaderMenuItemAvatar hasNotification={hasNotification} />]
            : [<HeaderMenuItemLogin />],
    );

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
