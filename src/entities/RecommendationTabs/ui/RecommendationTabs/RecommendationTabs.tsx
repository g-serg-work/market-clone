import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './RecommendationTabs.module.scss';
import SaleWebp from '../../assets/icons/sale.webp';

export interface RecommendationTabsProps {
    className?: string;
}

export const RecommendationTabs = memo((props: RecommendationTabsProps) => {
    const { className } = props;

    return (
        <div
            data-apiary-widget-name="@card/RecommendationTabs"
            className={classNames(cls.RecommendationTabs, {}, [className])}
        >
            <div className={cls.flex}>
                <div className={cls.wrapper}>
                    <div className={cls.itemForYou}>
                        <span>Для вас</span>
                    </div>
                    <div className={cls.itemSale}>
                        <img src={SaleWebp} alt="" />
                        <span>Распродажа</span>
                    </div>
                    <div
                        className={cls.marker}
                        style={{ transform: 'translateX(0px)' }}
                    />
                </div>
            </div>
        </div>
    );
});
