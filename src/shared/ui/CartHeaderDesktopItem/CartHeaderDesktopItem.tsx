import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/classNames';
import cls from './CartHeaderDesktopItem.module.scss';
import Svg from '../../assets/icons/cart.svg';
import { getRouteCart } from '@/shared/const/router';

export interface CartHeaderDesktopItemProps {
    className?: string;
    count?: number;
}

export const CartHeaderDesktopItem = memo(
    (props: CartHeaderDesktopItemProps) => {
        const { className, count } = props;

        return (
            <div
                className={classNames(cls.CartHeaderDesktopItem, {}, [
                    className,
                ])}
            >
                <Link className={cls.link} to={getRouteCart()} rel="nofollow">
                    <div data-baobab-name="favorites">
                        <div className={cls.svgWrapper} aria-hidden="true">
                            <span className={cls.count}>{count}</span>
                            <div className={cls.icon}>
                                <Svg title="Корзина" />
                            </div>
                        </div>
                    </div>
                    <div
                        className={cls.titleWrapper}
                        role="alert"
                        aria-live="polite"
                        aria-atomic="true"
                    >
                        Корзина
                        <span className="ds-visuallyHidden">{count}</span>
                    </div>
                </Link>
            </div>
        );
    },
);
