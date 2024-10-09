import cls from './HeaderMenuItemAvatar.module.scss';
import Png from '../../../assets/icons/avatar.png';
import classNames from '@/shared/lib/helpers/classNames';
import {
    AppEvent,
    AppEventChannel,
    AppEventTypes,
} from '@/shared/eventChannels/appEvents';
import { Button } from '@/shared/ui/Button';

interface HeaderMenuItemAvatarProps {
    className?: string;
    userName?: string;
    hasNotification?: boolean;
}

export const HeaderMenuItemAvatar = (props: HeaderMenuItemAvatarProps) => {
    const { className, userName, hasNotification } = props;

    const onClick = (appEvent: AppEvent) => {
        AppEventChannel.emit(
            AppEventTypes.onHeaderMenuItemAvatarClick,
            appEvent,
        );
    };

    return (
        <div
            className={classNames(cls.Avatar, {}, [className])}
            data-zone-name="profile"
            data-baobab-name="profile"
        >
            <Button
                type="button"
                className={classNames('', {}, [
                    cls.button,
                    'button-focus-ring',
                ])}
                aria-haspopup="true"
                aria-controls="userMenu"
                aria-expanded="false"
                onClick={onClick}
            >
                <img src={Png} alt={userName} />
            </Button>
            {hasNotification && <span className={cls.notification} />}
        </div>
    );
};
