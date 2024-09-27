import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './WishListHeaderDesktopItem.module.scss';

export interface WishListHeaderDesktopItemProps {
    className?: string;
}

export const WishListHeaderDesktopItem = memo((props: WishListHeaderDesktopItemProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.WishListHeaderDesktopItem, {}, [className])}>
            Избранное
        </div>
    );
});
