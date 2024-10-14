import { memo } from 'react';
import cls from './UserProfilePartner.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import PartnerSvg from '../../assets/icons/partner.svg';

export interface UserProfilePartnerProps {
    className?: string;
    autoFocus?: boolean;
    href: string;
}

const UserProfilePartner = memo((props: UserProfilePartnerProps) => {
    const { className, autoFocus, href } = props;
    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    return (
        <div
            className={classNames(cls.UserProfilePartner, {}, [className])}
            data-zone-name="sell-on-market-for-business"
        >
            <a
                ref={autoFocus ? autoFocusRef : undefined}
                href={href}
                aria-hidden="false"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className={cls.css}
                role="menuitem"
                data-auto="side-menu-item-help"
            >
                <div className={cls.css} aria-hidden="true">
                    <div className={cls.css} role="img" aria-hidden="true">
                        <PartnerSvg />
                    </div>
                </div>
                <div className={cls.css}>
                    <span>Продавайте на Маркете</span>
                    <span className={cls.css}>
                        Дарим 10 000 бонусов на продвижение
                    </span>
                </div>
            </a>
        </div>
    );
});

export default UserProfilePartner;
