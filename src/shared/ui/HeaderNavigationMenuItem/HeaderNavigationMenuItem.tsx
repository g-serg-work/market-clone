import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderNavigationMenuItem.module.scss';
import Svg from '../../assets/icons/navigation-menu.svg';

export interface HeaderNavigationMenuItemProps {
    className?: string;
}

export const HeaderNavigationMenuItem = memo(
    (props: HeaderNavigationMenuItemProps) => {
        const { className } = props;

        return (
            <div
                className={classNames(cls.HeaderNavigationMenuItem, {}, [
                    className,
                ])}
                data-zone-name="catalog"
                data-baobab-name="catalog"
            >
                <button
                    className={classNames(cls.button, {}, [
                        'button-focus-ring',
                    ])}
                >
                    <Svg id="hamburger" aria-hidden="true" />
                    <span>Каталог</span>
                </button>
            </div>
        );
    },
);
