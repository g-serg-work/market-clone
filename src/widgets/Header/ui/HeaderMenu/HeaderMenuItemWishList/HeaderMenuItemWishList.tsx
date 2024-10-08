import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './HeaderMenuItemWishList.module.scss';
import Svg from '../../../assets/icons/wish-list.svg';
import { getRouteWishList } from '@/shared/const/router';

export interface HeaderMenuItemWishListProps {
    className?: string;
    count?: number;
}

export const HeaderMenuItemWishList = memo(
    (props: HeaderMenuItemWishListProps) => {
        const { className, count } = props;

        return (
            <div
                className={classNames(cls.HeaderMenuItemWishList, {}, [
                    className,
                ])}
            >
                <Link
                    className={cls.link}
                    to={getRouteWishList()}
                    rel="nofollow"
                >
                    <div data-baobab-name="favorites">
                        <div className={cls.svgWrapper} aria-hidden="true">
                            <span className={cls.count}>{count}</span>
                            <div className={cls.icon}>
                                <Svg title="Избранное" />
                            </div>
                        </div>
                    </div>
                    <div
                        className={cls.titleWrapper}
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        Избранное
                        <span className="ds-visuallyHidden">{count}</span>
                    </div>
                </Link>
            </div>
        );
    },
);
