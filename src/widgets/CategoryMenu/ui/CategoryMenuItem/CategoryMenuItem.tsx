import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CategoryMenuItem.module.scss';
import {
    HeaderTabRoutes,
    HeaderTabRouteTitles,
} from '@/shared/const/headertabroutes';

export interface CategoryMenuItemProps {
    className?: string;
    route: HeaderTabRoutes;
}

export const CategoryMenuItem = memo((props: CategoryMenuItemProps) => {
    const { className, route } = props;
    const title = HeaderTabRouteTitles.get(route);

    return (
        <li role="tab">
            <div className={classNames(cls.CategoryMenuItem, {}, [className])}>
                <Link to={route}>
                    <span>{title}</span>
                </Link>
            </div>
        </li>
    );
});
