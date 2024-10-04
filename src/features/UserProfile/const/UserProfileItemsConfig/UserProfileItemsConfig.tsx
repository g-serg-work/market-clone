import { UserProfileItemProps } from '../../ui/UserProfileItem/UserProfileItem';
import { User } from '@/entities/User';

import {
    getRouteCompare,
    getRouteLogout,
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
import VacanciesSvg from '@/shared/assets/icons/profile/vacancies.svg';
import SettingsSvg from '@/shared/assets/icons/profile/settings.svg';
import HelpSvg from '@/shared/assets/icons/profile/help.svg';
import LogoutSvg from '@/shared/assets/icons/profile/logout.svg';
import UserProfileChat from '../../ui/UserProfileChat/UserProfileChat';
import UserProfileFavoriteCategory from '../../ui/UserProfileFavoriteCategory/UserProfileFavoriteCategory';

interface UserProfileItemsCfg extends UserProfileItemProps {
    getCountSelector?: (user: User) => number | undefined;
}
interface UserProfileItemCreatorArgs {
    idx: number;
    user: User | undefined;
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
            userName={user?.userName || 'unknown'}
            userEmail={user?.userEmail || 'unknown'}
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
    // TODO: UserProfilePurchased -> "/my/purchased"
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
    ({ idx, user, autoFocus }) => (
        <UserProfileFavoriteCategory
            key={idx}
            hint={user?.favoriteCategory?.hint || 'unknown'}
            selected={!!user?.favoriteCategory?.selected.length}
            autoFocus={autoFocus}
            onClick={() => alert('viewFavoriteCategory')}
        />
    ),
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
    //TODO: UserProfileSocial -> https://help.yandex.ru/roundup_market
    //TODO: UserProfileBusiness -> https://business.market.yandex.ru/pokupayte-dlya-biznesa
    //TODO: UserProfilePartner -> https://partner.market.yandex.ru/welcome/partners
    ({ idx, user, autoFocus }) => (
        <UserProfileChat
            key={idx}
            autoFocus={autoFocus}
            onClick={() => alert('chat')}
        />
    ),
    {
        name: 'vacancies',
        title: 'Маркет нанимает',
        route: 'https://yandex.ru/jobs/services/market/about',
        Svg: VacanciesSvg,
    },
    {
        name: 'settings',
        title: 'Настройки',
        route: getRouteSettings(),
        Svg: SettingsSvg,
    },
    {
        name: 'help',
        title: 'Справка',
        route: 'https://yandex.ru/support/market',
        routeAttr: {
            target: '_blank',
            rel: 'nofollow noopener',
        },
        Svg: HelpSvg,
    },
    {
        name: 'logout',
        title: 'Выйти',
        route: getRouteLogout(),
        Svg: LogoutSvg,
    },
];
