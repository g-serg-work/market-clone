import { memo } from 'react';
import { useSelector } from 'react-redux';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './UserProfile.module.scss';
import { getUserData, userActions } from '@/entities/User';
import UserProfileItemsCfg, {
    CustomRoute,
} from '../../const/UserProfileItemsConfig';
import UserProfileAdd from '../UserProfileAdd/UserProfileAdd';
import { getRouteAddUser } from '@/shared/const/router';
import UserProfileItem, {
    onRouteClickType,
} from '../UserProfileItem/UserProfileItem';
import { useAppDispatch } from '@/shared/lib/hooks';

export interface UserProfileProps {
    className?: string;
    autoFocus?: boolean;
    onClose?: () => void;
}

export const UserProfile = memo((props: UserProfileProps) => {
    const { className, autoFocus, onClose } = props;
    const dispatch = useAppDispatch();
    const userData = useSelector(getUserData);

    const onRouteClick: onRouteClickType = (route, e) => {
        if (route === CustomRoute.LOGOUT) {
            e.preventDefault();
            dispatch(userActions.logout());
        }
    };

    const profileItems = UserProfileItemsCfg.map((item, idx) => {
        const itemAutoFocus = autoFocus && idx === 1;

        if (typeof item === 'function') {
            return item({ idx, userData, autoFocus: itemAutoFocus });
        }

        const count = userData ? item.getCountSelector?.(userData) : undefined;

        return (
            <UserProfileItem
                key={idx}
                autoFocus={itemAutoFocus}
                {...item}
                count={count}
                onRouteClick={onRouteClick}
            />
        );
    });

    return (
        <div
            className={classNames(cls.UserProfile, {}, [className])}
            data-zone-name="profileMenu"
            data-baobab-name="profileMenu"
        >
            <div className={cls.profile}>
                <div aria-label="Меню пользователя" onClick={onClose}>
                    <div className={cls.menuItems}>{profileItems}</div>
                    <div className={cls.newUser}>
                        <UserProfileAdd route={getRouteAddUser()} />
                    </div>
                </div>
            </div>
        </div>
    );
});
