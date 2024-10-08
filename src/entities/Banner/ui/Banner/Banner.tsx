import { CSSProperties, memo, ReactNode } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './Banner.module.scss';
import { BannerLink } from '../BannerLink/BannerLink';
import { BannerTitle } from '../BannerTitle/BannerTitle';

export interface BannerProps {
    className?: string;
    href: string;
    bgImg: string;
    headerImg: string;
    body: ReactNode;
}

export const Banner = memo((props: BannerProps) => {
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
                            <BannerLink href={href} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
