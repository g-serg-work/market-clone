import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductSnippetImage.module.scss';
import { Product } from '../../../../../Product/model/types/product';
import { ProductSnippetImageBadge } from './ui/ProductSnippetImageBadge/ProductSnippetImageBadge';
import { ProductSnippetImagePicture } from './ui/ProductSnippetImagePicture/ProductSnippetImagePicture';

export interface ProductSnippetImageProps {
    className?: string;
    product: Product;
}

export const ProductSnippetImage = memo((props: ProductSnippetImageProps) => {
    const {
        className,
        product: { title, href, images, imgTest, cost },
    } = props;

    const img = images[0];

    return (
        <div className={classNames(cls.ProductSnippetImage, {}, [className])}>
            <div data-cs-name="navigate" className={cls.navigate}>
                <Link to={href} className={cls.link} data-auto="galleryLink">
                    <div data-apiary-widget-name="@marketfront/SnippetConstructor/SimpleGallery">
                        <div data-baobab-name="pictureGallery">
                            <div className={cls.gallery}>
                                <ProductSnippetImagePicture
                                    title={title}
                                    img={img}
                                    imgTest={imgTest}
                                />
                            </div>
                        </div>
                    </div>
                    {cost && <ProductSnippetImageBadge cost={cost} />}
                </Link>
            </div>
        </div>
    );
});
