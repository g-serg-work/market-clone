import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import Png from '../../assets/icons/avatar.png';
import { MouseEventHandler } from 'react';

export type AvatarClickCallback = ({
    avatarEl,
}: {
    avatarEl: HTMLElement;
}) => void;

interface AvatarProps {
    className?: string;
    userName?: string;
    hasNotification?: boolean;
    onClick?: AvatarClickCallback;
}

export const Avatar = (props: AvatarProps) => {
    const { className, userName, hasNotification, onClick } = props;

    const onButtonClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        const avatarEl = e.currentTarget;
        onClick?.({ avatarEl });
    };

    return (
        <div
            className={classNames(cls.Avatar, {}, [className])}
            data-zone-name="profile"
            data-baobab-name="profile"
        >
            <button
                className={classNames('', {}, [
                    cls.button,
                    'button-focus-ring',
                ])}
                aria-haspopup="true"
                aria-controls="userMenu"
                aria-expanded="false"
                onClick={onButtonClick}
            >
                <img src={Png} alt={userName} />
            </button>
            {hasNotification && <span className={cls.notification}></span>}
        </div>
    );
};
