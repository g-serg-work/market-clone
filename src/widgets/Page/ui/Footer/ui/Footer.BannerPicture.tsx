import cls from './Footer.BannerPicture.module.scss';
import FooterBannerWebp from '../assets/icons/banner.webp';

export const BannerPicture = () => (
    <div className={cls.flex} style={{ width: 180, height: 216.34 }}>
        <img src={FooterBannerWebp} fetchpriority="low" loading="lazy" data-auto="bannerPicture" />
    </div>
);
