import cls from './Footer.DistributionFooterDesktop.module.scss';
import { ReactNode, memo } from 'react';

export interface DistributionFooterDesktopProps {
    children: ReactNode;
}

export const DistributionFooterDesktop = memo(({ children }: DistributionFooterDesktopProps) => (
    <div
        data-apiary-widget-id="/footer/appPromoLoader/cmsDistributionWidget/0/135167782-DistributionFooterDesktop"
        data-apiary-widget-name="@marketfront/DistributionFooterDesktop"
    >
        <div className={cls.flex}>
            <div data-zone-name="appPromoDesktop">
                <div className={cls.wrapper}>
                    <div className={cls.content}>
                        <div className={cls.items}>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
));
