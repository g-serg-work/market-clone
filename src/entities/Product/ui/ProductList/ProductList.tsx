import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ProductItem } from '../ProductItem/ProductItem';
import cls from './ProductList.module.scss';
import { Product } from '../../model/types/Product';

export interface ProductListProps {
    className?: string;
    items: Product[];
}

export const ProductList = memo((props: ProductListProps) => {
    const { className, items } = props;

    const ProductItems = items.map(({ id, img, href }) => (
        <ProductItem key={id} img={img} href={href} />
    ));

    return (
        <div className={classNames(cls.ProductList, {}, [className])}>
            <nav>
                <div className={cls.listWrapper}>
                    <ul className={cls.Product}>{ProductItems}</ul>
                </div>
            </nav>
        </div>
    );
});
