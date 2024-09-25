import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './HeaderTabsList.module.scss';
import { GlobalDeliveryPoint } from '@/shared/ui/GlobalDeliveryPoint';
import { useHeaderItems } from './useHeaderItems';

export interface HeaderTabsListProps {
    className?: string;
    onFavoriteCategoryClick?: () => void;
}

export const HeaderTabsList = memo((props: HeaderTabsListProps) => {
    const { className, onFavoriteCategoryClick } = props;
    const { HeaderTabsItems, BuyerTypesItems } = useHeaderItems(
        onFavoriteCategoryClick,
    );

    return (
        <div className={classNames(cls.HeaderTabsList, {}, [className])}>
            <nav>
                <div className={cls.listWrapper}>
                    <div className={cls.regionSelectWrapper}>
                        <div className={cls.regionSelect}>
                            <GlobalDeliveryPoint />
                        </div>
                    </div>
                    <ul
                        className={cls.category}
                        role="tablist"
                        aria-label="Категории"
                    >
                        {HeaderTabsItems}
                    </ul>
                    <ul className={cls.bayerType} role="tablist">
                        {BuyerTypesItems}
                    </ul>
                </div>
            </nav>
        </div>
    );
});
