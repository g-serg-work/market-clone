import { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './LinkBestSellers.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import Svg from '../../assets/icons/link-to-12-12.svg';

export interface LinkBestSellersProps {
    className?: string;
    href: string;
}

export const LinkBestSellers = memo((props: LinkBestSellersProps) => {
    const { className, href } = props;
    return (
        <div className={classNames(cls.LinkBestSellers, {}, [className])}>
            <Link to={href}>
                <div className={cls.wrapper}>
                    <span>Посмотреть всё</span>
                    <Svg />
                </div>
            </Link>
        </div>
    );
});
