import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import { ProductItem } from '../ProductItem/ProductItem';
import cls from './ProductList.module.scss';
import { Product } from '../../model/types/product';

export interface ProductListProps {
    className?: string;
    items: Product[];
}

export const ProductList = memo((props: ProductListProps) => {
    const { className, items } = props;

    const ProductItems = items.map(({ id, ...item }) => (
        <ProductItem key={id} {...item} />
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
