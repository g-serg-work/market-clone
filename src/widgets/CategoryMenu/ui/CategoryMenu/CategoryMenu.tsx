import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CategoryMenu.module.scss';
import { useHeaderItems } from './useHeaderItems';
import { CategoryMenuAddressItem } from '../CategoryMenuAddressItem/CategoryMenuAddressItem';

export interface CategoryMenuProps {
    className?: string;
    deliveryAddress?: string;
    isLogged?: boolean;
}

export const CategoryMenu = memo((props: CategoryMenuProps) => {
    const { className, deliveryAddress, isLogged = false } = props;

    const { CategoryMenuItems, CategoryMenuBuyerItems } = useHeaderItems(isLogged);

    return (
        <div className={classNames(cls.CategoryMenu, {}, [className])}>
            <nav>
                <div className={cls.listWrapper}>
                    <CategoryMenuAddressItem
                        deliveryAddress={deliveryAddress}
                    />
                    <ul
                        className={cls.category}
                        role="tablist"
                        aria-label="Категории"
                    >
                        {CategoryMenuItems}
                    </ul>
                    <ul className={cls.bayerType} role="tablist">
                        {CategoryMenuBuyerItems}
                    </ul>
                </div>
            </nav>
        </div>
    );
});
