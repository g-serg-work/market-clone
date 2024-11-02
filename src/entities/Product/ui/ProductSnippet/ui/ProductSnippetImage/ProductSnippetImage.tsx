import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductSnippetImage.module.scss';
import { scrSetAttributesConfigure } from '@/shared/lib/helpers/scrSetAttributes';

export interface ProductSnippetImageProps {
    className?: string;
    images: string[];
    imgTest?: string;
    href: string;
    discount?: number;
}

const sizes = '(max-width: 1456px) 12vw, 200px';

const Picture = ({
    img,
    imgTest,
}: {
    img: string;
    imgTest: string | undefined;
}) => {
    const imgAttr = imgTest
        ? { src: imgTest }
        : scrSetAttributesConfigure(img, '_multiply');

    return (
        <div
            className={cls.picture}
            data-zone-name="picture"
            data-baobab-name="picture"
        >
            <div className={cls.pictureContent}>
                <div className={cls.imageWrapper}>
                    <img
                        {...imgAttr}
                        sizes={sizes}
                        // src="https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/orig"
                        // srcSet="https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/120x160 120w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/180x240 180w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/240x320 240w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/300x400 300w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/351x468 351w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/402x536 402w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/450x600 450w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/501x668 501w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/552x736 552w, https://avatars.mds.yandex.net/get-mpic/4119563/2a00000191c790a73a6ef48a7bddc2a9f28e/600x800 600w"
                        // sizes="(max-width: 1456px) 12vw, 200px"
                        alt="Lego 31154 Creator Лесные животные: Рыжая лисица"
                        fetchpriority="low"
                    />
                </div>
            </div>
        </div>
    );
};

const Discount = ({ discount }: { discount: number }) => (
    <div className={cls.discountWrapper}>
        <div className={cls.discountContainer}>
            <div data-auto="discount-badge" data-zone-name="discount-badge">
                <div className={classNames(cls.badge, {}, ['ds-badge'])}>
                    <span className="ds-valueLine ds-valueLine_gap_1 ds-badge__textContent">
                        <span className={cls.text}>{discount}</span>
                        <span className={cls.textPercent}>%</span>
                    </span>
                    <div className={cls.textUp}>ДЛЯ ВАС</div>
                </div>
            </div>
        </div>
    </div>
);

export const ProductSnippetImage = memo((props: ProductSnippetImageProps) => {
    const { className, images, href, imgTest, discount } = props;

    const img = images[0];

    return (
        <div className={classNames(cls.ProductSnippetImage, {}, [className])}>
            <div data-cs-name="navigate" className={cls.navigate}>
                <Link to={href} className={cls.link} data-auto="galleryLink">
                    <div data-apiary-widget-name="@marketfront/SnippetConstructor/SimpleGallery">
                        <div data-baobab-name="pictureGallery">
                            <div className={cls.gallery}>
                                <div data-apiary-widget-name="@marketfront/SnippetConstructor/SimpleGallery/Gallery">
                                    <div className={cls.pictureWrapper}>
                                        <Picture img={img} imgTest={imgTest} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {discount && discount > 0 && (
                        <Discount discount={discount} />
                    )}
                </Link>
            </div>
        </div>
    );
});
