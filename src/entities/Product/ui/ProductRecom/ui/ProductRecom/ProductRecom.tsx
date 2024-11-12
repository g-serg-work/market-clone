import { Link } from 'react-router-dom';
import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductRecom.module.scss';
import { ProductRecomCost } from '../ProductRecomCost/ProductRecomCost';
import { ProductRecomImage } from '../ProductRecomImage/ProductRecomImage';
import { Product } from '../../../../model/types/product';

export interface ProductRecomProps {
    className?: string;
    product: Product;
}

export const ProductRecom = memo((props: ProductRecomProps) => {
    const {
        className,
        product,
        product: { href, cost },
    } = props;

    return (
        <div
            className={classNames(cls.ProductRecom, {}, [className])}
            data-apiary-widget-name="@marketfront/RecomConstructor"
            data-zone-name="productRecom"
            data-baobab-name="productRecom"
        >
            <div className={cls.nude} data-auto-theme-name="nude">
                <div className={cls.nudeGrid}>
                    <div className={cls.imageWrapper}>
                        <ProductRecomImage product={product} />
                    </div>
                    {cost && (
                        <div className={cls.costWrapper}>
                            <ProductRecomCost href={href} cost={cost} />
                        </div>
                    )}
                    <div data-cs-name="navigate" className={cls.navigate}>
                        <Link
                            to={href}
                            className={cls.navigate}
                            data-auto="recom-link"
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
