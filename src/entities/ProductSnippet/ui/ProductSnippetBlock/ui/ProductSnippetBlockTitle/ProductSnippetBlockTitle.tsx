import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductSnippetBlockTitle.module.scss';

export interface ProductSnippetBlockTitleProps {
    className?: string;
    header: string;
    title: string;
}

export const ProductSnippetBlockTitle = memo(
    (props: ProductSnippetBlockTitleProps) => {
        const { className, header, title } = props;

        return (
            <div
                className={classNames(cls.ProductSnippetBlockTitle, {}, [
                    className,
                ])}
            >
                <span className={cls.header}>{header}</span>
                <h3 className={cls.title}>{title}</h3>
            </div>
        );
    },
);
