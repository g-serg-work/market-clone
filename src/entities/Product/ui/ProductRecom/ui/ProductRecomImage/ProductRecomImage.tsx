import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductRecomImage.module.scss';
import { Product } from '../../../../model/types/product';
import { ProductRecomImageBadge } from './ui/ProductRecomImageBadge/ProductRecomImageBadge';
import { ProductRecomImagePicture } from './ui/ProductRecomImagePicture/ProductRecomImagePicture';

export interface ProductRecomImageProps {
    className?: string;
    product: Product;
}

export const ProductRecomImage = memo((props: ProductRecomImageProps) => {
    const {
        className,
        product: { title, href, images, imgTest, cost },
    } = props;

    const img = images[0];

    return (
        <div className={classNames(cls.ProductRecomImage, {}, [className])}>
            <div data-cs-name="navigate" className={cls.navigate}>
                <Link to={href} className={cls.link} data-auto="galleryLink">
                    <div data-apiary-widget-name="@marketfront/RecomConstructor/SimpleGallery">
                        <div data-baobab-name="pictureGallery">
                            <div className={cls.gallery}>
                                <ProductRecomImagePicture
                                    title={title}
                                    img={img}
                                    imgTest={imgTest}
                                />
                            </div>
                        </div>
                    </div>
                    {cost && <ProductRecomImageBadge cost={cost} />}
                </Link>
            </div>
        </div>
    );
});
