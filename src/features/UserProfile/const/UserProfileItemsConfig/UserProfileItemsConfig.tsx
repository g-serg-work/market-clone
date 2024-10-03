import { UserProfileItemProps } from '../../ui/UserProfileItem/UserProfileItem';
import { User } from '@/entities/User';

import {
    getRouteCompare,
    getRouteOrders,
    getRoutePromoCodes,
    getRouteReturns,
    getRouteReviews,
    getRouteSettings,
    getRouteWishList,
} from '@/shared/const/router';

import UserProfileAvatar from '../../ui/UserProfileAvatar/UserProfileAvatar';

import ProfileOrdersSvg from '@/shared/assets/icons/profile/orders.svg';
import WishListSvg from '@/shared/assets/icons/profile/wish-list.svg';
import ReturnsSvg from '@/shared/assets/icons/profile/returns.svg';
import ReviewsSvg from '@/shared/assets/icons/profile/reviews.svg';
import PromoCodesSvg from '@/shared/assets/icons/profile/promo-codes.svg';
import ComparisonSvg from '@/shared/assets/icons/profile/comparison.svg';
import SettingsSvg from '@/shared/assets/icons/profile/settings.svg';

interface UserProfileItemsCfg extends UserProfileItemProps {
    getCountSelector?: (user: User) => number | undefined;
}
interface UserProfileItemCreatorArgs {
    idx: number;
    user: User;
    autoFocus?: boolean;
}

export type UserProfileItemCreator = (
    args: UserProfileItemCreatorArgs,
) => JSX.Element;

export const UserProfileItemsCfg: Array<
    UserProfileItemsCfg | UserProfileItemCreator
> = [
    ({ idx, user, autoFocus }) => (
        <UserProfileAvatar
            key={idx}
            autoFocus={autoFocus}
            userName={user.userName}
            userEmail={user.userEmail}
            href="https://id.yandex.ru"
        />
    ),
    {
        name: 'my-orders',
        title: 'Заказы',
        route: getRouteOrders(),
        Svg: ProfileOrdersSvg,
        getCountSelector: (user) => user.ordersList?.length,
    },
    {
        name: 'favorites',
        title: 'Избранное',
        route: getRouteWishList(),
        Svg: WishListSvg,
        getCountSelector: (user) => user.wishList?.length,
    },
    {
        name: 'my-returns',
        title: 'Возвраты',
        route: getRouteReturns(),
        Svg: ReturnsSvg,
    },
    {
        name: 'my-reviews',
        title: 'Мои отзывы и вопросы',
        route: getRouteReviews(),
        Svg: ReviewsSvg,
    },
    {
        name: 'promocodes',
        title: 'Промокоды',
        route: getRoutePromoCodes(),
        Svg: PromoCodesSvg,
    },
    {
        name: 'comparison',
        title: 'Списки сравнения',
        route: getRouteCompare(),
        Svg: ComparisonSvg,
    },
    {
        name: 'settings',
        title: 'Настройки',
        route: getRouteSettings(),
        Svg: SettingsSvg,
    },
];
