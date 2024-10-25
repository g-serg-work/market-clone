import cls from './Footer.BannerPicture.module.scss';
import FooterBannerWebp from '../assets/icons/banner.webp';

export const BannerPicture = () => (
    <div className={cls.BannerPicture}>
        <div className={cls.flex}>
            <img
                src={FooterBannerWebp}
                fetchpriority="low"
                loading="lazy"
                data-auto="bannerPicture"
                alt=""
            />
        </div>
    </div>
);
