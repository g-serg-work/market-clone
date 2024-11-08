import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import { Product } from '../../../../../Product/model/types/product';
import { ProductSnippetCostText } from './ui/ProductSnippetCostText/ProductSnippetCostText';
import { ChefBankByName } from '@/entities/ChefBank';
import { splitDigitsByThinSpace } from '@/shared/lib/helpers/splitDigitsByThinSpace';
import { priceFromCost } from '../../../../../Product/model/helper/priceFromCost';
import cls from './ProductSnippetCost.module.scss';

export interface ProductSnippetCostProps {
    className?: string;
    href: string;
    cost: NonNullable<Product['cost']>;
}

export const ProductSnippetCost = memo((props: ProductSnippetCostProps) => {
    const { className, href, cost } = props;

    return (
        <div className={classNames(cls.ProductSnippetCost, {}, [className])}>
            <div className={cls.price} data-baobab-name="price">
                <div data-cs-name="navigate">
                    <Link
                        to={href}
                        className={cls.link}
                        data-auto="snippet-link"
                    >
                        <div tabIndex={0}>
                            <span className="ds-visuallyHidden">
                                Цена{' '}
                                {splitDigitsByThinSpace(priceFromCost(cost))} ₽
                            </span>
                            <ProductSnippetCostText cost={cost}>
                                {cost.chefBank && (
                                    <ChefBankByName name={cost.chefBank.name} />
                                )}
                            </ProductSnippetCostText>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
});
