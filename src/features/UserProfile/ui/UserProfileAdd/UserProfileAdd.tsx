import { memo } from 'react';
import cls from './UserProfileAdd.module.scss';
import classNames from '@/shared/lib/classNames';
// TODO: change loader to raw-loader and use original "add-border.svg"
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import { Link } from 'react-router-dom';

export interface UserProfileAddProps {
    className?: string;
    autoFocus?: boolean;
    href: string;
}

const UserProfileAdd = memo((props: UserProfileAddProps) => {
    const { className, autoFocus, href } = props;
    const { autoFocusRef } = useAutoFocus();

    return (
        <div
            className={classNames(cls.UserProfileAdd, {}, [className])}
            data-zone-name="add-user"
        >
            <Link
                ref={autoFocus ? autoFocusRef : undefined}
                aria-hidden="false"
                to={href}
                className={cls.add}
                role="menuitem"
            >
                <div className={cls.addContent}></div>
                <span>Добавить пользователя</span>
            </Link>
        </div>
    );
});

export default UserProfileAdd;
