import cls from './Footer.AppBlock.module.scss';
import { AppGalleryInstall } from './Footer.AppGalleryInstall';
import { AppStoreInstall } from './Footer.AppStoreInstall';
import { GooglePlayInstall } from './Footer.GooglePlayInstall';

export const AppBlock = () => (
    <div className={cls.flex}>
        <span className={cls.title} data-auto="title">
            <div>
                Заказывайте в новом приложении
                <br />
                Маркета и получайте бонусы
            </div>
        </span>
        <div className={cls.wrapper}>
            <div className={cls.item} data-zone-name="appStoreInstall">
                <AppStoreInstall />
            </div>
            <div className={cls.item} data-zone-name="googlePlayInstall">
                <GooglePlayInstall />
            </div>
            <div className={cls.item} data-zone-name="appGalleryInstall">
                <AppGalleryInstall />
            </div>
        </div>
    </div>
);
