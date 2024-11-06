import { Link } from 'react-router-dom';
import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductSnippet.module.scss';
import { ProductSnippetCost } from '../ProductSnippetCost/ProductSnippetCost';
import { ProductSnippetImage } from '../ProductSnippetImage/ProductSnippetImage';
import { Product } from '../../../../model/types/product';

export interface ProductSnippetProps {
    className?: string;
    product: Product;
}

export const ProductSnippet = memo((props: ProductSnippetProps) => {
    const {
        className,
        product,
        product: { href, cost },
    } = props;

    return (
        <div
            className={classNames(cls.ProductSnippet, {}, [className])}
            data-apiary-widget-name="@marketfront/SnippetConstructor"
            data-zone-name="productSnippet"
            data-baobab-name="productSnippet"
        >
            <div className={cls.nude} data-auto-theme-name="nude">
                <div className={cls.nudeGrid}>
                    <div className={cls.imageWrapper}>
                        <ProductSnippetImage product={product} />
                    </div>
                    {cost && (
                        <div className={cls.costWrapper}>
                            <ProductSnippetCost href={href} cost={cost} />
                        </div>
                    )}
                    <div data-cs-name="navigate" className={cls.navigate}>
                        <Link
                            to={href}
                            className={cls.navigate}
                            data-auto="snippet-link"
                            aria-hidden="true"
                            tabIndex={-1}
                        />
                    </div>
                    <div className={cls.breaker} />
                </div>
            </div>
        </div>
    );
});
