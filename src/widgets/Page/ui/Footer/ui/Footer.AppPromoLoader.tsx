import { memo, ReactNode } from 'react';
import cls from './Footer.AppPromoLoader.module.scss';

export interface AppPromoLoaderProps {
    children: ReactNode;
}

export const AppPromoLoader = memo(({ children }: AppPromoLoaderProps) => (
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
));
