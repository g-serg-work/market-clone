import { memo, useCallback } from 'react';
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
import { useElementOnScreen } from '@/shared/lib/hooks/useElementOnScreen';
import {
    elementOnScreenChannel,
    elementOnChannelEvent,
} from '@/shared/eventsChannels/onScreenEventsChannel';

export interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;

    const userData = useSelector(getUserData);

    const onChangeOnScreen = useCallback((onScreen: boolean) => {
        elementOnScreenChannel.emit(
            elementOnChannelEvent.footerOnScreen,
            onScreen,
        );
    }, []);

    const [containerRef] = useElementOnScreen<HTMLDivElement>(
        {
            // root: window
            rootMargin: '0px',
            threshold: 0,
        },
        onChangeOnScreen,
    );

    return (
        <div
            ref={containerRef}
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
