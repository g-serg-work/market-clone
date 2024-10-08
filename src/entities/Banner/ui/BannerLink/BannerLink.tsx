import { memo } from 'react';
import { Link } from 'react-router-dom';
import cls from './BannerLink.module.scss';
import classNames from '@/shared/lib/classNames';
import Svg from '../../assets/icons/link-to-12-12.svg';

export interface BannerLinkProps {
    className?: string;
    href: string;
}

export const BannerLink = memo((props: BannerLinkProps) => {
    const { className, href } = props;
    return (
        <div className={classNames(cls.BannerLink, {}, [className])}>
            <Link to={href}>
                <div className={cls.wrapper}>
                    <span>Посмотреть всё</span>
                    <Svg />
                </div>
            </Link>
        </div>
    );
});
