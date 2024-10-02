import { memo } from 'react';
import cls from './UserProfileItem.module.scss';
import classNames from '@/shared/lib/classNames';

export interface UserProfileItemProps {
    className?: string;
    name: string;
    title: string;
    route: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

const UserProfileItem = memo((props: UserProfileItemProps) => {
    const { className, name, title, route, Svg } = props;

    return (
        <div
            className={classNames(cls.UserProfileItem, {}, [className])}
            data-zone-name={name}
        >
            <a
                className={cls.item}
                href={route}
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
            </a>
        </div>
    );
});

export default UserProfileItem;
