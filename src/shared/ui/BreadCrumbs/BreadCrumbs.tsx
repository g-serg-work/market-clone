import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './BreadCrumbs.module.scss';

export interface BreadCrumbsProps {
    className?: string;
}

export const BreadCrumbs = memo((props: BreadCrumbsProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.BreadCrumbs, {}, [className])}>
            <p>@search/BreadCrumbs</p>
            <nav>Breadcrumbs</nav>
        </div>
    );
});
