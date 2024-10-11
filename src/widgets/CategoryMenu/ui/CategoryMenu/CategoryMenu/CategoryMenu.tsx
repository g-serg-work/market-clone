import { memo } from 'react';
import { useSelector } from 'react-redux';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CategoryMenu.module.scss';
import { useHeaderItems } from './useHeaderItems';
import { CategoryMenuAddressItem } from '../CategoryMenuAddressItem/CategoryMenuAddressItem';
import { getUserData } from '@/entities/User';

export interface CategoryMenuProps {
    className?: string;
}

export const CategoryMenu = memo((props: CategoryMenuProps) => {
    const { className } = props;

    const { CategoryMenuItems, CategoryMenuBuyerItems } = useHeaderItems();

    const userData = useSelector(getUserData);

    const address =
        userData?.addressList.at(0) ??
        Intl.DateTimeFormat().resolvedOptions().timeZone;

    return (
        <div className={classNames(cls.CategoryMenu, {}, [className])}>
            <nav>
                <div className={cls.listWrapper}>
                    <CategoryMenuAddressItem address={address} />
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
