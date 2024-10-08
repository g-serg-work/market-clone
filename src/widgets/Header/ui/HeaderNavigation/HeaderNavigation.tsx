import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderNavigation.module.scss';
import Svg from '../../assets/icons/navigation-menu.svg';
import { Button } from '@/shared/ui/Button';

export interface HeaderNavigationProps {
    className?: string;
}

export const HeaderNavigation = memo((props: HeaderNavigationProps) => {
    const { className } = props;

    return (
        <div
            className={classNames(cls.HeaderNavigation, {}, [className])}
            data-zone-name="catalog"
            data-baobab-name="catalog"
        >
            <Button
                className={classNames(cls.button, {}, ['button-focus-ring'])}
            >
                <Svg id="hamburger" aria-hidden="true" />
                <span>Каталог</span>
            </Button>
        </div>
    );
});
