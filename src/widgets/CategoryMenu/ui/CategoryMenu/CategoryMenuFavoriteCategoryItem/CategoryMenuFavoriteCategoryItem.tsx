import { memo } from 'react';
import classNames from '@/shared/lib/classNames';
import cls from './CategoryMenuFavoriteCategoryItem.module.scss';
import { ClickAble } from '@/shared/ui/ClickAble';

interface CategoryMenuFavoriteCategoryItemProps {
    className?: string;
    onClick?: () => void;
}

const title = 'Любимая категория';

export const CategoryMenuFavoriteCategoryItem = memo((props: CategoryMenuFavoriteCategoryItemProps) => {
    const { className, onClick } = props;

    return (
        <li role="tab">
            <ClickAble
                className={classNames(cls.CategoryMenuFavoriteCategoryItem, {}, [
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
