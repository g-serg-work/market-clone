import { memo, useCallback, useState } from 'react';
import { MarketLogo } from '@/shared/ui/MarketLogo';
import classNames from '@/shared/lib/classNames';
import cls from './Header.module.scss';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu/HeaderMenu';
import { HeaderMenuItemAvatarClickCallback } from '../HeaderMenu/HeaderMenuItemAvatar/HeaderMenuItemAvatar';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';

interface HeaderProps {
    className?: string;
    onHeaderMenuItemAvatarClick?: HeaderMenuItemAvatarClickCallback;
}

export const Header = memo((props: HeaderProps) => {
    const { className, onHeaderMenuItemAvatarClick } = props;

    const [searchValue, onSearchValueChange] = useState('');

    // eslint-disable-next-line no-alert
    const onSearchSubmit = useCallback((value: string) => alert(value), []);

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <header>
                <div className={cls.inner}>
                    <div className={cls.itemsWrapper}>
                        <div className={cls.logoWrapper}>
                            <MarketLogo />
                        </div>
                        <div className={cls.mainWrapper}>
                            <div className={cls.navigationWrapper}>
                                <HeaderNavigation />
                            </div>
                            <div className={cls.searchWrapper}>
                                <HeaderSearch
                                    value={searchValue}
                                    onChange={onSearchValueChange}
                                    onSubmit={onSearchSubmit}
                                />
                            </div>
                            <div className={cls.mainMenuWrapper}>
                                <HeaderMenu
                                    onHeaderMenuItemAvatarClick={
                                        onHeaderMenuItemAvatarClick
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
});
