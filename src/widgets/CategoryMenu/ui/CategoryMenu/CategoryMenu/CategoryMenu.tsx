import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CategoryMenu.module.scss';
import { useHeaderItems } from './useHeaderItems';
import { CategoryMenuAddressItem } from '../CategoryMenuAddressItem/CategoryMenuAddressItem';

export interface CategoryMenuProps {
    className?: string;
}

export const CategoryMenu = memo((props: CategoryMenuProps) => {
    const { className } = props;

    const { CategoryMenuItems, CategoryMenuBuyerItems } = useHeaderItems();

    return (
        <div className={classNames(cls.CategoryMenu, {}, [className])}>
            <nav>
                <div className={cls.listWrapper}>
                    <CategoryMenuAddressItem />
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
