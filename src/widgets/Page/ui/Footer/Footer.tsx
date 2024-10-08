import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './Footer.module.scss';

export interface FooterProps {
    className?: string;
}

export const Footer = memo((props: FooterProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.Footer, {}, [className])}>
            <footer>
                <div>
                    <div>DistributionLoader</div>
                    <div>FooterSubsriptions</div>
                    <div>CompanyInfo</div>
                </div>
            </footer>
        </div>
    );
});
