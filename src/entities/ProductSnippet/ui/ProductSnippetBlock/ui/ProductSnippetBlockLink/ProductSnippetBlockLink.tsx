import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductSnippetBlockLink.module.scss';

export interface ProductSnippetBlockLinkProps {
    className?: string;
    href: string;
}

const Svg = () => (
    <svg
        width="24"
        height="24"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M10 8L14.5 12.5L10 17"
            stroke="#21201F"
            strokeWidth="1.75"
            strokeLinecap="round"
        />
    </svg>
);

export const ProductSnippetBlockLink = memo(
    (props: ProductSnippetBlockLinkProps) => {
        const { className, href } = props;

        return (
            <div>
                <div
                    className={classNames(cls.ProductSnippetBlockLink, {}, [
                        className,
                    ])}
                    data-zone-name="showAll"
                    data-baobab-name="showAll"
                >
                    <Link to={href} className={cls.link}>
                        <span className={cls.all}>Все</span>
                        <Svg />
                    </Link>
                </div>
            </div>
        );
    },
);
