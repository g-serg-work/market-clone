import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import { Product } from '../../../../model/types/product';
import { ProductRecomCostText } from './ui/ProductRecomCostText/ProductRecomCostText';
import { ChefBankByName } from '@/entities/ChefBank';
import { splitDigitsByThinSpace } from '@/shared/lib/helpers/splitDigitsByThinSpace';
import { priceFromCost } from '../../../../model/helper/priceFromCost';
import cls from './ProductRecomCost.module.scss';

export interface ProductRecomCostProps {
    className?: string;
    href: string;
    cost: NonNullable<Product['cost']>;
}

export const ProductRecomCost = memo((props: ProductRecomCostProps) => {
    const { className, href, cost } = props;

    return (
        <div className={classNames(cls.ProductRecomCost, {}, [className])}>
            <div className={cls.price} data-baobab-name="price">
                <div data-cs-name="navigate">
                    <Link
                        to={href}
                        className={cls.link}
                        data-auto="recom-link"
                    >
                        <div tabIndex={0}>
                            <span className="ds-visuallyHidden">
                                Цена{' '}
                                {splitDigitsByThinSpace(priceFromCost(cost))} ₽
                            </span>
                            <ProductRecomCostText cost={cost}>
                                {cost.chefBank && (
                                    <ChefBankByName name={cost.chefBank.name} />
                                )}
                            </ProductRecomCostText>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
});
