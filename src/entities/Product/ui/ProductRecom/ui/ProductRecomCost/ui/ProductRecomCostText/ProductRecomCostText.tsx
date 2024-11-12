import { memo, ReactNode } from 'react';
import { Product } from '../../../../../../model/types/product';
import { splitDigitsByThinSpace } from '@/shared/lib/helpers/splitDigitsByThinSpace';
import classNames from '@/shared/lib/helpers/classNames';
import { priceFromCost } from '../../../../../../model/helper/priceFromCost';
import cls from './ProductRecomCostText.module.scss';

export interface ProductRecomCostTextProps {
    children?: ReactNode | undefined;
    cost: NonNullable<Product['cost']>;
}

export const ProductRecomCostText = memo(
    (props: ProductRecomCostTextProps) => {
        const { children, cost } = props;

        let costClassName = 'ds-text_color_text-primary';

        if (cost.sale) costClassName = 'ds-text_color_price-sale';
        else if (cost.discount || cost.chefBank)
            costClassName = 'ds-text_color_price-term';

        return (
            <div className={cls.wrapper}>
                <span className={cls.content}>
                    <span
                        className="ds-valueLine ds-valueLine_gap_2"
                        data-auto="recom-price-current"
                        aria-hidden="true"
                    >
                        <span
                            className={classNames(cls.digit, {}, [
                                costClassName,
                            ])}
                        >
                            {splitDigitsByThinSpace(priceFromCost(cost))}
                        </span>
                        <span
                            className={classNames(cls.currency, {}, [
                                costClassName,
                            ])}
                        >
                            ₽
                        </span>
                    </span>
                    {children}
                </span>
            </div>
        );
    },
);
