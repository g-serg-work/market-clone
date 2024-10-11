import { memo, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import cls from './UserProfileItem.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';
import { RouteType } from '../../const/UserProfileItemsConfig';

export type onRouteClickType = (route: string, e: MouseEvent<HTMLAnchorElement>) => void;

export interface UserProfileItemProps {
    className?: string;
    autoFocus?: boolean;
    name: string;
    title: string;
    route?: string;
    routeType?: RouteType;
    routeAttr?: {};
    onRouteClick: onRouteClickType;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    count?: number;
}

const UserProfileItem = memo((props: UserProfileItemProps) => {
    const {
        className,
        autoFocus,
        name,
        title,
        route = '/',
        routeType = RouteType.relative,
        routeAttr = {},
        onRouteClick,
        Svg,
        count,
    } = props;

    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    const linkContent = (
        <>
            <div className={cls.itemContent} aria-hidden="true">
                <div className={cls.itemImage} role="img" aria-hidden="true">
                    <Svg />
                </div>
            </div>
            <span>{title}</span>
            {count ? <span className={cls.count}>{count}</span> : null}
        </>
    );

    const onClick = (e: MouseEvent<HTMLAnchorElement>) =>
        onRouteClick(route, e);

    return (
        <div
            className={classNames(cls.UserProfileItem, {}, [className])}
            data-zone-name={name}
        >
            {/* TODO: need combine into one component */}
            {routeType === RouteType.relative ? (
                <Link
                    ref={autoFocus ? autoFocusRef : undefined}
                    to={route}
                    className={cls.item}
                    role="menuitem"
                    aria-hidden="false"
                    onClick={onClick}
                    {...routeAttr}
                >
                    {linkContent}
                </Link>
            ) : (
                <a
                    ref={autoFocus ? autoFocusRef : undefined}
                    href={route}
                    className={cls.item}
                    role="menuitem"
                    aria-hidden="false"
                    onClick={onClick}
                    {...routeAttr}
                >
                    {linkContent}
                </a>
            )}
        </div>
    );
});

export default UserProfileItem;
