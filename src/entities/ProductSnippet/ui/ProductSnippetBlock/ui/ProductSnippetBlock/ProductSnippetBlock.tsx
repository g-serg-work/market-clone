import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import { ProductSnippetBlockLink } from '../ProductSnippetBlockLink/ProductSnippetBlockLink';
import { ProductSnippetBlockTitle } from '../ProductSnippetBlockTitle/ProductSnippetBlockTitle';
import cls from './ProductSnippetBlock.module.scss';
import { Product } from '@/entities/Product';
import { ProductSnippet } from '../../../ProductSnippet/ui/ProductSnippet/ProductSnippet';

export interface ProductSnippetBlockProps {
    className?: string;
    bgColor: string;
    header: string;
    title: string;
    href: string;
    products: Product[];
}

export const ProductSnippetBlock = memo((props: ProductSnippetBlockProps) => {
    const { className, header, title, href, bgColor, products } = props;

    return (
        <div
            data-apiary-widget-name="@light/RecomProductBlockSnippet"
            className={classNames(cls.ProductSnippetBlock, {}, [className])}
            data-zone-name="recomProductBlock"
            data-baobab-name="multiSnippet"
        >
            <div className={cls.wrapper} style={{ backgroundColor: bgColor }}>
                <div className={cls.titleContainer}>
                    <ProductSnippetBlockTitle header={header} title={title} />
                    <ProductSnippetBlockLink href={href} />
                </div>
                <div className={cls.breaker} />
                <div className={cls.snippets} data-baobab-name="snippets">
                    {products.map((product) => (
                        <ProductSnippet key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
});
