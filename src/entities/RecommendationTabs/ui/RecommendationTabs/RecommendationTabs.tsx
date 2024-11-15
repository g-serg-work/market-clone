import { memo } from 'react';
import classNames, { Mods } from '@/shared/lib/helpers/classNames';
import cls from './RecommendationTabs.module.scss';
import SaleWebp from '../../assets/icons/sale.webp';
import SaleActiveWebp from '../../assets/icons/sale-active.webp';
import { ClickAble } from '@/shared/ui/ClickAble';

export interface RecommendationTabsProps {
    className?: string;
    isSale?: boolean;
    toggle?: () => void;
}

export const RecommendationTabs = memo((props: RecommendationTabsProps) => {
    const { className, isSale, toggle } = props;

    const translateX = isSale ? 162 : 0;

    const itemForYouMods: Mods = {
        [cls.itemActive]: !isSale,
    };

    const itemSaleMods: Mods = {
        [cls.itemActive]: isSale,
    };

    return (
        <div
            data-apiary-widget-name="@card/RecommendationTabs"
            className={classNames(cls.RecommendationTabs, {}, [className])}
        >
            <div className={cls.flex}>
                <div className={cls.wrapper}>
                    <ClickAble
                        className={classNames(
                            cls.itemForYou,
                            itemForYouMods,
                            [],
                        )}
                        onClick={isSale ? toggle : undefined}
                    >
                        <span>Для вас</span>
                    </ClickAble>
                    <ClickAble
                        className={classNames(cls.itemSale, itemSaleMods, [])}
                        onClick={isSale ? undefined : toggle}
                    >
                        <img src={isSale ? SaleActiveWebp : SaleWebp} alt="" />
                        <span>Распродажа</span>
                    </ClickAble>
                    <div
                        className={cls.marker}
                        style={{ transform: `translateX(${translateX}px)` }}
                    />
                </div>
            </div>
        </div>
    );
});
