import cls from './Footer.AppGalleryInstall.module.scss';
import AppGallerySvg from '../assets/icons/app-gallery.svg';

export const AppGalleryInstall = () => (
    <div className={cls.AppGalleryInstall} data-zone-name="appGalleryInstall">
        <a
            href="https://appgallery.huawei.com/app/C101134157"
            className={cls.link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            data-auto="appGalleryLink"
            aria-label="Откройте в AppGallery"
        >
            <AppGallerySvg width="123" height="40" data-auto="appGalleryImage" />
        </a>
    </div>
);
