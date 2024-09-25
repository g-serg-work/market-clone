import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TitleWithBreadcrumbs.module.scss';

export interface TitleWithBreadcrumbsProps {
    className?: string;
}

export const TitleWithBreadcrumbs = memo((props: TitleWithBreadcrumbsProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.TitleWithBreadcrumbs, {}, [className])}>
            <p>@search/TitleWithBreadcrumbs</p>
            <nav>Breadcrumbs</nav>
        </div>
    );
});
