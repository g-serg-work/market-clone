import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { CategoryItem } from '../CategoryItem/CategoryItem';
import cls from './CategoryList.module.scss';
import { Category } from '../../model/types/Category';

export interface CategoryListProps {
    className?: string;
    items: Category[];
}

export const CategoryList = memo((props: CategoryListProps) => {
    const { className, items } = props;

    const CategoryItems = items.map(({ id, img, href }) => (
        <CategoryItem key={id} img={img} href={href} />
    ));

    return (
        <div className={classNames(cls.CategoryList, {}, [className])}>
            <nav>
                <div className={cls.listWrapper}>
                    <ul className={cls.category}>{CategoryItems}</ul>
                </div>
            </nav>
        </div>
    );
});
