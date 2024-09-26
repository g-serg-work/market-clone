import { memo, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { MarketLogo } from '@/shared/ui/MarketLogo';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderDesktop.module.scss';
import { Modal } from '@/shared/ui/Modal';

const NavigationMenu = () => {
    return <div>NavigationMenu</div>;
};

const HeaderSearch = () => {
    return <div>HeaderSearch</div>;
};

const NotificationButton = () => {
    return <div>NotificationButton</div>;
};

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onUserProfile = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            <div onClick={onUserProfile}>UserProfile</div>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={onClose} lazy>
                    <span>UserProfile Modal</span>
                </Modal>
            )}
        </>
    );
};

const HeaderMainMenu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NotificationButton />
                </li>
                <li>
                    <UserProfile />
                </li>
            </ul>
        </nav>
    );
};

interface HeaderProps {
    className?: string;
}

export const HeaderDesktop = memo((props: HeaderProps) => {
    const { className } = props;

    const authData = useSelector(getUserAuthData);
    authData?.id;

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
                                <NavigationMenu />
                            </div>
                            <div className={cls.searchWrapper}>
                                <HeaderSearch />
                            </div>
                            <div className={cls.mainMenuWrapper}>
                                <HeaderMainMenu />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
});
