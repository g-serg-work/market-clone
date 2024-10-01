import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './FavoriteCategoryItem.module.scss';
import { ClickAble } from '@/shared/ui/ClickAble';

interface FavoriteCategoryItemProps {
    className?: string;
    onClick?: () => void;
}

const title = 'Любимая категория';

export const FavoriteCategoryItem = memo((props: FavoriteCategoryItemProps) => {
    const { className, onClick } = props;

    return (
        <li role="tab">
            <ClickAble
                className={classNames(cls.FavoriteCategoryItem, {}, [
                    className,
                ])}
                tabIndex={0}
                role="button"
                onClick={onClick}
            >
                <span>{title}</span>
            </ClickAble>
        </li>
    );
});
