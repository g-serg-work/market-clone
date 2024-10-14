import { memo, useCallback, useState } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './Header.module.scss';
import { HeaderSearch } from '../HeaderSearch/HeaderSearch';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import { HeaderLogo } from '../HeaderLogo/HeaderLogo';

interface HeaderProps {
    className?: string;
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;

    const [searchValue, onSearchValueChange] = useState('');

    // eslint-disable-next-line no-alert
    const onSearchSubmit = useCallback((value: string) => alert(value), []);

    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <header>
                <div className={cls.inner}>
                    <div className={cls.itemsWrapper}>
                        <div className={cls.logoWrapper}>
                            <HeaderLogo />
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
                                <HeaderMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
});
