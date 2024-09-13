import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { BannerTitle } from '@/shared/ui/BannerTitle';
import { LinkBestSellers } from '@/shared/ui/LinkBestSellers';
import cls from './BannerList.module.scss';

interface BannerListProps {
    className?: string;
    titleImgPath: string;
    body: ReactNode;
    href: string;
}

export const BannerList = memo((props: BannerListProps) => {
    const { className, titleImgPath, body, href } = props;

    return (
        <div className={classNames(cls.Banner, {}, [className])}>
            <div className={cls.wrapper}>
                <div className={cls.inner}>
                    <div className={cls.itemsWrapper}>
                        <BannerTitle imgPath={titleImgPath} />
                        <div className={cls.linkWrapper}>
                            {body}
                            <LinkBestSellers href={href} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
