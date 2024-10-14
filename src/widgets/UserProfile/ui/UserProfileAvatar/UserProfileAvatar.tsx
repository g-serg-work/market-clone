import { memo } from 'react';
import cls from './UserProfileAvatar.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import Avatar from '../../assets/icons/avatar.png';
import svgTextToBackgroundImage from '@/shared/lib/helpers/svgTextToBackgroundImage';
// TODO: change loader to raw-loader and use original "avatar-border.svg"
import { profileAvatarBorderSvgText } from '../../assets/profile-avatar-border-svg-text';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';

export interface UserProfileAvatarProps {
    className?: string;
    autoFocus?: boolean;
    userName: string;
    userEmail: string;
    href: string;
}

const UserProfileAvatar = memo((props: UserProfileAvatarProps) => {
    const { className, autoFocus, userName, userEmail, href } = props;
    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    return (
        <div
            className={classNames(cls.UserProfileAvatar, {}, [className])}
            data-zone-name="profile-badge"
        >
            <a
                ref={autoFocus ? autoFocusRef : undefined}
                aria-hidden="false"
                href={href}
                className={cls.avatar}
                role="menuitem"
            >
                <div className={cls.avatarContent}>
                    <div className={cls.avatarImage}>
                        <div data-auto="user-avatar">
                            <div className={cls.avatarImageContent}>
                                <picture className={cls.avatarPicture}>
                                    <source srcSet={Avatar} />
                                    <img src={Avatar} alt={userName} />
                                </picture>
                            </div>
                        </div>
                        <div
                            className={cls.avatarRing}
                            style={svgTextToBackgroundImage(
                                profileAvatarBorderSvgText,
                            )}
                        />
                    </div>
                    <div className={cls.avatarInfo}>
                        <div
                            className={cls.avatarInfoName}
                            data-auto="public-user-info"
                        >
                            {userName}
                        </div>
                        <div className={cls.avatarInfoEmail}>{userEmail}</div>
                    </div>
                </div>
            </a>
        </div>
    );
});

export default UserProfileAvatar;
