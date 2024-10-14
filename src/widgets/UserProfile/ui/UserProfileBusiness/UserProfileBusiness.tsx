import { memo } from 'react';
import cls from './UserProfileBusiness.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import BusinessSvg from '../../assets/icons/business.svg';

export interface UserProfileBusinessProps {
    className?: string;
    autoFocus?: boolean;
    href: string;
}

const UserProfileBusiness = memo((props: UserProfileBusinessProps) => {
    const { className, autoFocus, href } = props;
    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    return (
        <div
            className={classNames(cls.UserProfileBusiness, {}, [className])}
            data-zone-name="buyForBusinessMenuItem"
            data-baobab-name="buyForBusinessMenuItem"
        >
            <div className={cls.css}>
                <div className={cls.css} data-zone-name="buyForBusiness">
                    <a
                        ref={autoFocus ? autoFocusRef : undefined}
                        href={href}
                        className={cls.css}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        data-auto="buyForBusinessMenuItem"
                        role="menuitem"
                    >
                        <div className={cls.css}>
                            <div>
                                <BusinessSvg />
                            </div>
                            <div className={cls.css}>
                                <div className={cls.css}>
                                    <span
                                        className={cls.css}
                                        data-auto="text-primary"
                                    >
                                        Покупайте как юр.лицо
                                    </span>
                                    <span
                                        className={cls.css}
                                        data-auto="text-secondary"
                                    >
                                        С возможностью получить вычет до 20% НДС
                                    </span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
});

export default UserProfileBusiness;
