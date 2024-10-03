import { memo } from 'react';
import cls from './UserProfileItem.module.scss';
import classNames from '@/shared/lib/classNames';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import { Link } from 'react-router-dom';

export interface UserProfileItemProps {
    className?: string;
    autoFocus?: boolean;
    name: string;
    title: string;
    route: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    count?: number;
}

const UserProfileItem = memo((props: UserProfileItemProps) => {
    const { className, autoFocus, name, title, route, Svg, count } = props;
    const { autoFocusRef } = useAutoFocus();

    return (
        <div
            className={classNames(cls.UserProfileItem, {}, [className])}
            data-zone-name={name}
        >
            <Link
                ref={autoFocus ? autoFocusRef : undefined}
                to={route}
                className={cls.item}
                role="menuitem"
                aria-hidden="false"
            >
                <div className={cls.itemContent} aria-hidden="true">
                    <div
                        className={cls.itemImage}
                        role="img"
                        aria-hidden="true"
                    >
                        <Svg />
                    </div>
                </div>
                <span>{title}</span>
                {count && <span className={cls.count}>{count}</span>}
            </Link>
        </div>
    );
});

export default UserProfileItem;
