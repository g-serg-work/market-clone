import { Link } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductSnippet.module.scss';
import { ProductSnippetCost } from '../ProductSnippetCost/ProductSnippetCost';
import { ProductSnippetImage } from '../ProductSnippetImage/ProductSnippetImage';

export interface ProductSnippetProps {
    className?: string;
    images: string[];
    imgTest?: string;
    href: string;
    cost: number;
    discount?: number;
    chefBank?: ReactNode;
}

export const ProductSnippet = memo((props: ProductSnippetProps) => {
    const { className, images, href, imgTest, cost, discount, chefBank } =
        props;

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
                        <ProductSnippetImage
                            href={href}
                            discount={discount}
                            images={images}
                            imgTest={imgTest}
                        />
                    </div>
                    <div className={cls.costWrapper}>
                        <ProductSnippetCost
                            href={href}
                            cost={cost}
                            chefBank={chefBank}
                        />
                    </div>
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
