import { memo } from 'react';
import cls from './MarketLogo.module.scss';
import MarketSvg from '@/shared/assets/icons/market-logo.svg';
import { classNames } from '@/shared/lib/classNames/classNames';

interface MarketLogoProps {
    className?: string;
}

export const MarketLogo = memo(({ className }: MarketLogoProps) => {
    return (
        <div className={classNames(cls.MarketLogo, {}, [className])}>
            <MarketSvg />
        </div>
    );
});
