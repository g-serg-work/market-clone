import { memo } from 'react';
import { useSelector } from 'react-redux';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './Footer.module.scss';
import { AppPromoLoader } from './ui/Footer.AppPromoLoader';
import { DistributionFooterDesktop } from './ui/Footer.DistributionFooterDesktop';
import { UsefulLinks } from './ui/Footer.UsefulLinks';
import { FooterSubscriptions } from './ui/Footer.FooterSubscriptions';
import { getUserData } from '@/entities/User';
import { AppBlock } from './ui/Footer.AppBlock';
import { BannerPicture } from './ui/Footer.BannerPicture';
import { GeneratedQrCode } from './ui/Footer.GeneratedQrCode';
import { AppGalleryInstall } from './ui/Footer.AppGalleryInstall';
import { AppStoreInstall } from './ui/Footer.AppStoreInstall';
import { GooglePlayInstall } from './ui/Footer.GooglePlayInstall';

export interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;

    const userData = useSelector(getUserData);

    return (
        <div
            id="footer"
            className={classNames(cls.Footer, {}, [className])}
            data-apiary-widget-id="/footer"
            data-apiary-widget-name="@marketfront/Footer"
            data-testid="Footer"
        >
            <div
                className={cls.footerWrapper}
                data-zone-name="footer"
                data-baobab-name="footer"
            >
                <footer className={cls.footerContent} data-sins-no-track="true">
                    <div>
                        <AppPromoLoader>
                            <DistributionFooterDesktop>
                                <AppBlock>
                                    <AppStoreInstall />
                                    <GooglePlayInstall />
                                    <AppGalleryInstall />
                                </AppBlock>
                                <BannerPicture />
                                <GeneratedQrCode />
                            </DistributionFooterDesktop>
                        </AppPromoLoader>
                        {userData && (
                            <FooterSubscriptions
                                userEmail={userData.userEmail}
                            />
                        )}
                        <UsefulLinks />
                    </div>
                </footer>
            </div>
        </div>
    );
});
