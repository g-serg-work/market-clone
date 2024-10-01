import { memo, useCallback, useState } from 'react';
import { MarketLogo } from '@/shared/ui/MarketLogo';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderDesktop.module.scss';
import { HeaderDesktopMenu } from '@/features/HeaderDesktopMenu';
import { HeaderSearchItem } from '@/shared/ui/HeaderSearchItem';
import { HeaderNavigationMenuItem } from '@/shared/ui/NavigationMenuItem';

interface HeaderProps {
    className?: string;
    onAvatarClick?: () => void;
}

export const HeaderDesktop = memo((props: HeaderProps) => {
    const { className, onAvatarClick } = props;

    const [searchValue, onSearchValueChange] = useState('');

    const onSearchSubmit = useCallback((value: string) => alert(value), []);

    return (
        <div className={classNames(cls.HeaderDesktop, {}, [className])}>
            <header>
                <div className={cls.inner}>
                    <div className={cls.itemsWrapper}>
                        <div className={cls.logoWrapper}>
                            <MarketLogo />
                        </div>
                        <div className={cls.mainWrapper}>
                            <div className={cls.navigationWrapper}>
                                <HeaderNavigationMenuItem />
                            </div>
                            <div className={cls.searchWrapper}>
                                <HeaderSearchItem
                                    value={searchValue}
                                    onChange={onSearchValueChange}
                                    onSubmit={onSearchSubmit}
                                />
                            </div>
                            <div className={cls.mainMenuWrapper}>
                                <HeaderDesktopMenu
                                    onAvatarClick={onAvatarClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
});
