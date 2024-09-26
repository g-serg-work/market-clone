import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './FavoriteCategoryItem.module.scss';

interface FavoriteCategoryItemProps {
    className?: string;
    onClick?: () => void;
}

const title = 'Любимая категория';

export const FavoriteCategoryItem = memo((props: FavoriteCategoryItemProps) => {
    const { className, onClick } = props;

    return (
        <li role="tab">
            <div
                className={classNames(cls.FavoriteCategoryItem, {}, [
                    className,
                ])}
                tabIndex={0}
                role="button"
                onClick={onClick}
            >
                <span>{title}</span>
            </div>
        </li>
    );
});
