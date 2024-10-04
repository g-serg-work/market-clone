import { memo } from 'react';
import cls from './UserProfileSocial.module.scss';
import classNames from '@/shared/lib/classNames';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import SocialSvg from '@/shared/assets/icons/profile/social.svg';

export interface UserProfileSocialProps {
    className?: string;
    autoFocus?: boolean;
    href: string;
}

const UserProfileSocial = memo((props: UserProfileSocialProps) => {
    const { className, autoFocus, href } = props;
    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    return (
        <div
            className={classNames(cls.UserProfileSocial, {}, [className])}
            data-zone-name="helpOnMarketMenuItem"
        >
            <a
                ref={autoFocus ? autoFocusRef : undefined}
                href={href}
                className={cls.css}
                target="_blank"
                rel="nofollow noopener noreferrer"
                role="menuitem"
            >
                <div className={cls.css}>
                    <div className={cls.css}>
                        <div data-auto="iconHelp">
                            <div>
                                <SocialSvg fill="none" />
                            </div>
                        </div>
                        <div className={cls.css}>
                            <span className={cls.css} data-auto="title">
                                Помощь рядом
                            </span>
                            <span className={cls.css} data-auto="description">
                                Социальный проект Яндекса
                            </span>
                            <span className={cls.css}>Не просмотрено</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
});

export default UserProfileSocial;
