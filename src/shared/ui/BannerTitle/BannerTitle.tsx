import { memo } from 'react';
import cls from './BannerTitle.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Banner } from '@/entities/BannerList';

const bannerUrl = (id: string) => `/public/assets/banners/${id}.webp`;

export interface BannerTitleProps {
    className?: string;
    bannerId: Banner['id'];
}

export const BannerTitle = memo((props: BannerTitleProps) => {
    const { className, bannerId } = props;

    const bannerImg = (
        <div className={cls.imgWrapper}>
            <div className={cls.img}>
                <span>
                    <img src={bannerUrl(bannerId)} alt="" fetchpriority="low" />
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
