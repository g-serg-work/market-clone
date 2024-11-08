import { memo, ReactNode } from 'react';
import { Product } from '../../../../../../../Product/model/types/product';
import { splitDigitsByThinSpace } from '@/shared/lib/helpers/splitDigitsByThinSpace';
import classNames from '@/shared/lib/helpers/classNames';
import { priceFromCost } from '../../../../../../../Product/model/helper/priceFromCost';
import cls from './ProductSnippetCostText.module.scss';

export interface ProductSnippetCostTextProps {
    children?: ReactNode | undefined;
    cost: NonNullable<Product['cost']>;
}

export const ProductSnippetCostText = memo(
    (props: ProductSnippetCostTextProps) => {
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
                        data-auto="snippet-price-current"
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
