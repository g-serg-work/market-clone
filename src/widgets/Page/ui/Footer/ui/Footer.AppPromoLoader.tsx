import { ReactNode } from 'react';
import cls from './Footer.AppPromoLoader.module.scss';

export const AppPromoLoader = ({ children }: { children: ReactNode }) => (
    <div
        data-apiary-widget-id="/footer/appPromoLoader"
        data-apiary-widget-name="@marketfront/DistributionLoader"
    >
        <div
            data-apiary-widget-id="/footer/appPromoLoader/cmsDistributionWidget"
            data-apiary-widget-name="@marketfront/CmsPageLayout"
        >
            <div data-zone-name="CmsPageLayout">
                <div
                    data-apiary-widget-id="/footer/appPromoLoader/cmsDistributionWidget/0"
                    data-apiary-widget-name="@marketfront/CmsLayout"
                >
                    <div className={cls.wrapper}>
                        <div className={cls.flex}>
                            <div className={cls.grow}>
                                <div>{children}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
