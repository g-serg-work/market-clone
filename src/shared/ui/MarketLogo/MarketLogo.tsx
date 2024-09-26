import { memo } from 'react';
import cls from './MarketLogo.module.scss';
import MarketSvg from '@/shared/assets/icons/market-logo.svg';
import classNames from '@/shared/lib/classNames';

export interface MarketLogoProps {
    className?: string;
}

const clickLinks = [
    {
        href: 'https://ya.ru/',
        dataAuto: 'logoYandexLink',
    },
    {
        href: '/',
        dataAuto: 'logoMarketLink',
    },
].map(({ href, dataAuto }, idx) => (
    <a
        key={idx}
        className="focus-ring"
        href={href}
        data-auto={dataAuto}
        aria-label="Яндекс"
    >
        <span className="ds-visuallyHidden">Яндекс</span>
    </a>
));

export const MarketLogo = memo(({ className }: MarketLogoProps) => {
    return (
        <div className={classNames(cls.MarketLogo, {}, [className])}>
            <MarketSvg />
            <div className={cls.clickArea}>{clickLinks}</div>
        </div>
    );
});
