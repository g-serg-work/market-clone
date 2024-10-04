import { memo } from 'react';
import { useSelector } from 'react-redux';
import classNames from '@/shared/lib/classNames';
import cls from './UserProfile.module.scss';
import { getUserAuthData } from '@/entities/User';
import UserProfileItemsCfg from '../../const/UserProfileItemsConfig';
import UserProfileAdd from '../UserProfileAdd/UserProfileAdd';
import { getRouteAddUser } from '@/shared/const/router';
import UserProfileItem from '../UserProfileItem/UserProfileItem';

export interface UserProfileProps {
    className?: string;
    autoFocus?: boolean;
}

const UserProfile = memo((props: UserProfileProps) => {
    const { className, autoFocus } = props;
    const user = useSelector(getUserAuthData);

    const profileItems = UserProfileItemsCfg.map((item, idx) => {
        const itemAutoFocus = autoFocus && idx === 1;
        if (typeof item === 'function')
            return item({ idx, user, autoFocus: itemAutoFocus });

        const count = user && item.getCountSelector?.(user);
        return (
            <UserProfileItem
                key={idx}
                autoFocus={itemAutoFocus}
                {...item}
                count={count}
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
                <div
                    id="userMenu"
                    role="menubar"
                    aria-label="Меню пользователя"
                >
                    <div className={cls.menuItems}>{profileItems}</div>
                    <div className={cls.newUser}>
                        <UserProfileAdd route={getRouteAddUser()} />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default UserProfile;
