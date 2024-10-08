import { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './UserProfileAdd.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';

export interface UserProfileAddProps {
    className?: string;
    autoFocus?: boolean;
    route: string;
}

const UserProfileAdd = memo((props: UserProfileAddProps) => {
    const { className, autoFocus, route } = props;
    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    return (
        <div
            className={classNames(cls.UserProfileAdd, {}, [className])}
            data-zone-name="add-user"
        >
            <Link
                ref={autoFocus ? autoFocusRef : undefined}
                aria-hidden="false"
                to={route}
                className={cls.add}
                role="menuitem"
            >
                <div className={cls.addContent} />
                <span>Добавить пользователя</span>
            </Link>
        </div>
    );
});

export default UserProfileAdd;
