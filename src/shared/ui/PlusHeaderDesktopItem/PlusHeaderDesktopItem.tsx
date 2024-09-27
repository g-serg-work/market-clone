import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './PlusHeaderDesktopItem.module.scss';

export interface PlusHeaderDesktopItemProps {
    className?: string;
}

export const PlusHeaderDesktopItem = memo(
    (props: PlusHeaderDesktopItemProps) => {
        const { className } = props;

        return (
            <div
                className={classNames(cls.PlusHeaderDesktopItem, {}, [
                    className,
                ])}
            >
                Баллы
            </div>
        );
    },
);
