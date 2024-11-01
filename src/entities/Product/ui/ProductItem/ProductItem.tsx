import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductItem.module.scss';
import { scrSetAttributesConfigure } from '@/shared/lib/helpers/scrSetAttributes';

export interface ProductItemProps {
    className?: string;
    images: string[];
    imgTest?: string;
    href: string;
}

const sizes = '(max-width: 1456px) 18vw, 265px';

export const ProductItem = memo((props: ProductItemProps) => {
    const { className, images, href, imgTest } = props;

    const img = images[0];

    const imgAttr = imgTest
        ? { src: imgTest }
        : scrSetAttributesConfigure(img, '_multiply');

    return (
        <li className={classNames(cls.ProductItem, {}, [className])}>
            <div>
                <Link to={href}>
                    <div
                        className={cls.linkInner}
                        style={{ paddingBottom: '100%' }}
                    >
                        <div className={cls.imageWrapper}>
                            <img
                                {...imgAttr}
                                sizes={sizes}
                                src={img}
                                alt=""
                                loading="lazy"
                                fetchpriority="low"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    );
});
