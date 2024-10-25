import { memo } from 'react';
import cls from './CategoryMenuBuyerItem.module.scss';
import {
    BuyerTypeRouteNodeTabAble,
    BuyerTypeRoutes,
    BuyerTypeRouteTitles,
} from '@/shared/const/buyertype';
import classNames, { Mods } from '@/shared/lib/helpers/classNames';

export interface CategoryMenuBuyerItemProps {
    className?: string;
    route: BuyerTypeRoutes;
}

export const CategoryMenuBuyerItem = memo(
    (props: CategoryMenuBuyerItemProps) => {
        const { className, route } = props;
        const title = BuyerTypeRouteTitles.get(route);

        const nodeTabAble = BuyerTypeRouteNodeTabAble.includes(route);

        const mods: Mods = {
            [cls.nodeTabAble]: nodeTabAble,
        };

        const tabAttr = nodeTabAble ? { tabIndex: 0 } : {};

        return (
            <li role="tab">
                <div
                    className={classNames(cls.CategoryMenuBuyerItem, mods, [
                        className,
                    ])}
                    {...tabAttr}
                    role="button"
                >
                    <a href={route}>
                        <span>{title}</span>
                    </a>
                </div>
            </li>
        );
    },
);
