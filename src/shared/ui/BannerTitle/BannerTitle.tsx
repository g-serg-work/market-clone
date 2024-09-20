import { memo } from 'react';
import cls from './BannerTitle.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface BannerTitleProps {
    className?: string;
    img: string;
}

export const BannerTitle = memo((props: BannerTitleProps) => {
    const { className, img } = props;

    return (
        <div className={classNames(cls.BannerTitle, {}, [className])}>
            <div className={cls.inner}>
                <div className={cls.hint}>
                    <div className={cls.imgWrapper}>
                        <div className={cls.img}>
                            <span>
                                <img src={img} alt="" fetchpriority="low" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
