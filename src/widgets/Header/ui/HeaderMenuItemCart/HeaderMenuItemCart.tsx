import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './HeaderMenuItemCart.module.scss';
import Svg from '../../assets/icons/cart.svg';
import { getRouteCart } from '@/shared/const/router';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';

export interface HeaderMenuItemCartProps {
    className?: string;
    count?: number;
    autoFocus?: boolean;
}

export const HeaderMenuItemCart = memo((props: HeaderMenuItemCartProps) => {
    const { className, count, autoFocus } = props;
    const { autoFocusRef } = useAutoFocus<HTMLAnchorElement>();

    return (
        <div className={classNames(cls.HeaderMenuItemCart, {}, [className])}>
            <Link
                ref={autoFocus ? autoFocusRef : undefined}
                className={cls.link}
                to={getRouteCart()}
                rel="nofollow"
            >
                <div data-baobab-name="favorites">
                    <div className={cls.svgWrapper} aria-hidden="true">
                        {count ? (
                            <span className={cls.count}>{count}</span>
                        ) : null}
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
});
