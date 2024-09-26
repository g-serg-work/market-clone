import { CSSProperties, memo, ReactNode } from 'react';
import classNames from '@/shared/lib/classNames';
import { BannerTitle } from '@/shared/ui/BannerTitle';
import { LinkBestSellers } from '@/shared/ui/LinkBestSellers';
import cls from './PageBanner.module.scss';

export interface PageBannerProps {
    className?: string;
    href: string;
    bgImg: string;
    headerImg: string;
    body: ReactNode;
}

export const PageBanner = memo((props: PageBannerProps) => {
    const { className, href, bgImg, headerImg, body } = props;

    const bgStyle: CSSProperties = {
        backgroundImage: `url(${bgImg})`,
    };

    return (
        <div
            className={classNames(cls.Banner, {}, [className])}
            style={bgStyle}
        >
            <div className={cls.wrapper}>
                <div className={cls.inner}>
                    <div className={cls.itemsWrapper}>
                        <BannerTitle img={headerImg} />
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
