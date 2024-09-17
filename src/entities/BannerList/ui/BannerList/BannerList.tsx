import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BannerTitle } from '@/shared/ui/BannerTitle';
import { LinkBestSellers } from '@/shared/ui/LinkBestSellers';
import cls from './BannerList.module.scss';
import { Banner } from '../../model/types/Banner';

export interface BannerListProps {
    className?: string;
    banner: Banner;
    carusel: ReactNode;
}

export const BannerList = memo((props: BannerListProps) => {
    const { className, banner, carusel } = props;

    return (
        <div className={classNames(cls.Banner, {}, [className])}>
            <div className={cls.wrapper}>
                <div className={cls.inner}>
                    <div className={cls.itemsWrapper}>
                        <BannerTitle bannerId={banner.id} />
                        <div className={cls.linkWrapper}>
                            {carusel}
                            <LinkBestSellers href={banner.href} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
