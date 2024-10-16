import cls from './Footer.DistributionFooterDesktop.module.scss';
import { BannerPicture } from './Footer.BannerPicture';
import { GeneratedQrCode } from './Footer.GeneratedQrCode';
import { AppBlock } from './Footer.AppBlock';

export const DistributionFooterDesktop = () => (
    <div
        data-apiary-widget-id="/footer/appPromoLoader/cmsDistributionWidget/0/135167782-DistributionFooterDesktop"
        data-apiary-widget-name="@marketfront/DistributionFooterDesktop"
    >
        <div className={cls.flex}>
            <div data-zone-name="appPromoDesktop">
                <div className={cls.wrapper}>
                    <div className={cls.content}>
                        <div className={cls.flexInner}>
                            <div className={cls.column1}>
                                <AppBlock />
                            </div>
                            <div className={cls.column2}>
                                <BannerPicture />
                            </div>
                            <div className={cls.column3}>
                                <GeneratedQrCode />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
