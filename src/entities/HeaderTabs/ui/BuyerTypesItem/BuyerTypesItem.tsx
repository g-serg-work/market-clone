import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './BuyerTypesItem.module.scss';
import {
    BuyerTypeRouteNodeTabAble,
    BuyerTypeRoutes,
    BuyerTypeRouteTitles,
} from '@/shared/const/buyertype';

interface BuyerTypesItemProps {
    className?: string;
    route: BuyerTypeRoutes;
}

export const BuyerTypesItem = memo((props: BuyerTypesItemProps) => {
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
                className={classNames(cls.BuyerTypesItem, mods, [className])}
                {...tabAttr}
                role="button"
            >
                <a href={route}>
                    <span>{title}</span>
                </a>
            </div>
        </li>
    );
});
