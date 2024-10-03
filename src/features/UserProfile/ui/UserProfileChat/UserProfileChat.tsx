import { memo } from 'react';
import cls from './UserProfileChat.module.scss';
import classNames from '@/shared/lib/classNames';
import ChatSvg from '@/shared/assets/icons/profile/chat.svg';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import { ClickAble } from '@/shared/ui/ClickAble';

export interface UserProfileChatProps {
    className?: string;
    autoFocus?: boolean;
    onClick?: () => void;
}

const UserProfileChat = memo((props: UserProfileChatProps) => {
    const { className, autoFocus, onClick } = props;

    const { autoFocusRef } = useAutoFocus<HTMLDivElement>();

    return (
        <ClickAble
            className={classNames(cls.UserProfileChat, {}, [className])}
            ref={autoFocus ? autoFocusRef : undefined}
            tabIndex={0}
            role="menuitem"
            data-auto="side-menu-item-support"
            aria-live="polite"
            aria-atomic="true"
            onClick={onClick}
        >
            <div className={cls.imageWrapper} aria-hidden="true">
                <div className={cls.image} role="img" aria-hidden="true">
                    <ChatSvg />
                </div>
            </div>
            <span>Чат с поддержкой</span>
        </ClickAble>
    );
});

export default UserProfileChat;
