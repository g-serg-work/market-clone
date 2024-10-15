import { memo } from 'react';
import classNames, { Mods } from '@/shared/lib/helpers/classNames';
import cls from './LoginForm.PageOverlay.module.scss';

interface PageOverlayProps {
    isLoading?: boolean;
}

export const PageOverlay = memo((props: PageOverlayProps) => {
    const { isLoading } = props;

    const mods: Mods = {
        [cls.passpPageOverlayShowed]: isLoading,
    };

    return (
        <div className={classNames(cls.passpPageOverlay, mods, [])}>
            <div data-t="spin" className={cls.passpPageOverlaySpin} />
        </div>
    );
});
