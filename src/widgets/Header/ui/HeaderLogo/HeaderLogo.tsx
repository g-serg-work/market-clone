import { memo } from 'react';
import cls from './HeaderLogo.module.scss';
import Svg from '../../assets/icons/market-logo.svg';
import classNames from '@/shared/lib/helpers/classNames';

export interface HeaderLogoProps {
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

export const HeaderLogo = memo(({ className }: HeaderLogoProps) => {
    return (
        <div className={classNames(cls.HeaderLogo, {}, [className])}>
            <Svg />
            <div className={cls.clickArea}>{clickLinks}</div>
        </div>
    );
});
