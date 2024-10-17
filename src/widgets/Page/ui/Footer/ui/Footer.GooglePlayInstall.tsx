import cls from './Footer.GooglePlayInstall.module.scss';
import GooglePlaySvg from '../assets/icons/google-play.svg';

export const GooglePlayInstall = () => (
    <div className={cls.GooglePlayInstall} data-zone-name="googlePlayInstall">
        <a
            href="https://play.google.com/store/apps/"
            className={cls.link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            data-auto="googlePlayLink"
            aria-label="Доступно в Google Play"
        >
            <GooglePlaySvg width="136" height="40" data-auto="googlePlayImage" />
        </a>
    </div>
);
