import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './LinkBestSellers.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import LinkToSvg from '../../assets/icons/link-to-12-12.svg';

interface LinkBestSellersProps {
    className?: string;
    href: string;
}

export const LinkBestSellers = memo((props: LinkBestSellersProps) => {
    const { className, href } = props;
    return (
        <div className={classNames(cls.LinkBestSellers, {}, [className])}>
            <NavLink to={href}>
                <div className={cls.wrapper}>
                    <span>Посмотреть всё</span>
                    <LinkToSvg />
                </div>
            </NavLink>
        </div>
    );
});
