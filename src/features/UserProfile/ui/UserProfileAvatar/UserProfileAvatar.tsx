import { memo } from 'react';
import cls from './UserProfileAvatar.module.scss';
import classNames from '@/shared/lib/classNames';
import Avatar from '@/shared/assets/icons/profile-avatar.png';
import { profileAvatarBorderSvgText } from './assets/profile-avatar-border-svg-text';
import svgTextToBackgroundImage from '@/shared/lib/svgTextToBackgroundImage';

export interface UserProfileAvatarProps {
    className?: string;
    userName: string;
    userEmail: string;
    href: string;
}

const UserProfileAvatar = memo((props: UserProfileAvatarProps) => {
    const { className, userName, userEmail, href } = props;

    return (
        <div
            className={classNames(cls.UserProfileAvatar, {}, [className])}
            data-zone-name="profile-badge"
        >
            <a
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
                        ></div>
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
