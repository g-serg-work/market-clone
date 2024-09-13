import { memo } from 'react';
import cls from './BannerTitle.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface BannerTitleProps {
    className?: string;
    imgPath: string;
}

export const BannerTitle = memo((props: BannerTitleProps) => {
    const { className, imgPath } = props;

    const bannerImg = (
        <div className={cls.imgWrapper}>
            <div className={cls.img}>
                <span>
                    <img alt={imgPath} src={imgPath} fetchpriority="low" />
                </span>
            </div>
        </div>
    );

    return (
        <div className={classNames(cls.BannerTitle, {}, [className])}>
            <div className={cls.inner}>
                <div className={cls.hint}>{bannerImg}</div>
            </div>
        </div>
    );
});
