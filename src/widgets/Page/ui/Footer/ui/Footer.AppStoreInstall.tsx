import cls from './Footer.AppStoreInstall.module.scss';
import AppStoreSvg from '../assets/icons/app-store.svg';

export const AppStoreInstall = () => (
    <div className={cls.AppStoreInstall} data-zone-name="appStoreInstall">
        <a
            href="https://apps.apple.com"
            className={cls.link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            data-auto="appStoreLink"
            aria-label="Загрузите в App Store"
        >
            <AppStoreSvg width="122" height="40" data-auto="appStoreImage" />
        </a>
    </div>
);
