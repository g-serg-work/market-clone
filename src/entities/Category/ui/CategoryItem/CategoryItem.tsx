import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './CategoryItem.module.scss';

export interface CategoryItemProps {
    className?: string;
    img: string;
    href: string;
}

export const CategoryItem = memo((props: CategoryItemProps) => {
    const { className, img, href } = props;

    return (
        <li className={classNames(cls.CategoryItem, {}, [className])}>
            <div>
                <Link to={href}>
                    <div
                        className={cls.linkInner}
                        style={{ paddingBottom: '100%' }}
                    >
                        <div className={cls.imageWrapper}>
                            <img
                                src={img}
                                alt=""
                                loading="lazy"
                                fetchPriority="low"
                            />
                        </div>
                    </div>
                </Link>
            </div>
        </li>
    );
});
