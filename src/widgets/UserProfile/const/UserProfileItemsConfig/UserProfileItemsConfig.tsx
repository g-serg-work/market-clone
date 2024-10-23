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

import ProfileOrdersSvg from '../../assets/icons/orders.svg';
import WishListSvg from '../../assets/icons/wish-list.svg';
import ReturnsSvg from '../../assets/icons/returns.svg';
import ReviewsSvg from '../../assets/icons/reviews.svg';
import PromoCodesSvg from '../../assets/icons/promo-codes.svg';
import ComparisonSvg from '../../assets/icons/comparison.svg';
import VacanciesSvg from '../../assets/icons/vacancies.svg';
import SettingsSvg from '../../assets/icons/settings.svg';
import HelpSvg from '../../assets/icons/help.svg';
import LogoutSvg from '../../assets/icons/logout.svg';
import UserProfileChat from '../../ui/UserProfileChat/UserProfileChat';
import UserProfileFavoriteCategory from '../../ui/UserProfileFavoriteCategory/UserProfileFavoriteCategory';
import {
    modalChannel,
    modalChannelEvent,
} from '@/shared/eventsChannels/modalEventsChannel';

export enum RouteType {
    relative,
    absolute,
}

export enum CustomRoute {
    LOGOUT = '/logout',
}

interface UserProfileItemCfg
    extends Omit<UserProfileItemProps, 'onRouteClick'> {
    getCountSelector?: (user: User) => number | undefined;
}

interface UserProfileItemCreatorArgs {
    idx: number;
    userData: User | undefined;
    autoFocus?: boolean;
}

export type UserProfileItemCreator = (
    args: UserProfileItemCreatorArgs,
) => JSX.Element;

export const UserProfileItemsCfg: Array<
    UserProfileItemCfg | UserProfileItemCreator
> = [
    ({ idx, userData, autoFocus }) => (
        <UserProfileAvatar
            key={idx}
            autoFocus={autoFocus}
            userName={userData?.userName || 'unknown'}
            userEmail={userData?.userEmail || 'unknown'}
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
    ({ idx, userData, autoFocus }) => (
        <UserProfileFavoriteCategory
            key={idx}
            hint={userData?.favoriteCategory?.hint || 'unknown'}
            selected={!!userData?.favoriteCategory?.selected.length}
            autoFocus={autoFocus}
            onClick={() => {
                modalChannel.emit(modalChannelEvent.showFavoriteCategoryModal);
            }}
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
    // TODO: UserProfileSocial -> https://help.yandex.ru/roundup_market
    // TODO: UserProfileBusiness -> https://business.market.yandex.ru/pokupayte-dlya-biznesa
    // TODO: UserProfilePartner -> https://partner.market.yandex.ru/welcome/partners
    ({ idx, autoFocus }) => (
        <UserProfileChat
            key={idx}
            autoFocus={autoFocus}
            // eslint-disable-next-line no-alert
            onClick={() => alert('chat')}
        />
    ),
    {
        name: 'vacancies',
        title: 'Маркет нанимает',
        route: 'https://yandex.ru/jobs/services/market/about',
        routeType: RouteType.absolute,
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
        routeType: RouteType.absolute,
        routeAttr: {
            target: '_blank',
            rel: 'nofollow noopener',
        },
        Svg: HelpSvg,
    },
    {
        name: 'logout',
        title: 'Выйти',
        route: CustomRoute.LOGOUT,
        Svg: LogoutSvg,
    },
];
