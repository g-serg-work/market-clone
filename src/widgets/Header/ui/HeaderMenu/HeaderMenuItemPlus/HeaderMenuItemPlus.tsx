import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './HeaderMenuItemPlus.module.scss';
import Svg from '../../../assets/icons/ya-plus-badge.svg';

export interface HeaderMenuItemPlusProps {
    className?: string;
}

const icon = (
    <div className={cls.iconContainer} aria-hidden="true">
        <div className={cls.iconWrapper}>
            <div className={cls.iconParent} data-zone-name="yaPlusBadge">
                <Svg
                    className={cls.badge}
                    aria-hidden="true"
                    aria-label="Яндекс Плюс"
                    data-auto="yaPlusBadge"
                 />
            </div>
        </div>
    </div>
);

const link = (
    <a
        className={cls.link}
        href="https://plus.yandex.ru"
        target="_blank"
        rel="nofollow noopener noreferrer"
        data-auto="headerPlusBalance"
        aria-label="Баллы Плюса"
    >
        <div className={cls.linkContent}>
            {icon}
            <div
                className={cls.textContainer}
                role="alert"
                aria-live="polite"
                aria-atomic="true"
            >
                Баллы
                <span className="ds-visuallyHidden" />
            </div>
        </div>
    </a>
);

export const HeaderMenuItemPlus = memo((props: HeaderMenuItemPlusProps) => {
    const { className } = props;

    return (
        <div
            className={classNames(cls.HeaderMenuItemPlus, {}, [className])}
            data-zone-name="HeaderPlusBadge"
            data-baobab-name="plusAmount"
        >
            {link}
        </div>
    );
});
