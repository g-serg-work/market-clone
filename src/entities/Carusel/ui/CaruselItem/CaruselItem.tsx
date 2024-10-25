import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CaruselItem.module.scss';
import {
    scrSetAttributesConfigure,
    scrSetSizesType,
} from '@/shared/lib/helpers/scrSetAttributes';

export interface CaruselItemProps {
    className?: string;
    title: string;
    img: string;
    imgTest?: string;
    href: string;
}

const sizes = '160px';

const scrSetSizes: scrSetSizesType = [
    [120, 160],
    [180, 240],
    [240, 320],
    [300, 400],
    [351, 468],
    [402, 536],
    [450, 600],
    [501, 668],
    [552, 736],
    [600, 800],
];

export const CaruselItem = memo((props: CaruselItemProps) => {
    const { className, img, href, title, imgTest } = props;

    const imgAttr = imgTest
        ? { src: imgTest }
        : scrSetAttributesConfigure(img, scrSetSizes);

    return (
        <li className={classNames(cls.CaruselItem, {}, [className])}>
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
                                alt={title}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    );
});
