import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CaruselItem.module.scss';
import { scrSetAttributesConfigure } from '@/shared/lib/helpers/scrSetAttributes';

export interface CaruselItemProps {
    className?: string;
    title: string;
    images: string[];
    imgTest?: string;
    href: string;
}

const sizes = '160px';

export const CaruselItem = memo((props: CaruselItemProps) => {
    const { className, images, href, title, imgTest } = props;

    const img = images[0];

    const imgAttr = imgTest ? { src: imgTest } : scrSetAttributesConfigure(img);

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
                                fetchpriority="high"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    );
});
