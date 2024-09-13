import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderTabsItem.module.scss';
import {
    HeaderTabRoutes,
    HeaderTabRouteTitles,
} from '@/shared/const/headertabroutes';

export interface HeaderTabsItemProps {
    className?: string;
    route: HeaderTabRoutes;
}

export const HeaderTabsItem = memo((props: HeaderTabsItemProps) => {
    const { className, route } = props;
    const title = HeaderTabRouteTitles.get(route);

    return (
        <li role="tab">
            <div className={classNames(cls.HeaderTabsItem, {}, [className])}>
                <Link to={route}>
                    <span>{title}</span>
                </Link>
            </div>
        </li>
    );
});
