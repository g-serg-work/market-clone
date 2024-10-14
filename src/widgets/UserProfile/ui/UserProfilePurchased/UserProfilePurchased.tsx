import { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './UserProfilePurchased.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import PurchasedSvg from '../../assets/icons/purchased.svg';

export interface UserProfilePurchasedProps {
    className?: string;
    autoFocus?: boolean;
    route: string;
}

const UserProfilePurchased = memo((props: UserProfilePurchasedProps) => {
    const { className, autoFocus, route } = props;
    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    return (
        <div
            className={classNames(cls.UserProfilePurchased, {}, [className])}
            data-zone-name="purchasedGoods"
        >
            <Link
                ref={autoFocus ? autoFocusRef : undefined}
                to={route}
                className={cls.link}
            >
                <li className={cls.li}>
                    <div className={cls.div}>
                        <PurchasedSvg />
                    </div>
                    <div>
                        <span className={cls.span}>Купленные товары</span>
                    </div>
                    <div className={cls.count}>
                        <div className={cls.count}>
                            <span className={cls.span}>NEW</span>
                        </div>
                    </div>
                </li>
            </Link>
        </div>
    );
});

export default UserProfilePurchased;
