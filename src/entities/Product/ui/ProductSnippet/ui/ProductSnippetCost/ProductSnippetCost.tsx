import { memo, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ProductSnippetCost.module.scss';

export interface ProductSnippetCostProps {
    className?: string;
    href: string;
    cost: number;
    chefBank?: ReactNode;
}

const Cost = ({ children, cost }: { children: ReactNode; cost: string }) => (
    <div className={cls.wrapper}>
        <span className={cls.content}>
            <span
                className="ds-valueLine ds-valueLine_gap_2"
                data-auto="snippet-price-current"
                aria-hidden="true"
            >
                <span className={cls.priceDigit}>{cost}</span>
                <span className={cls.priceCurrency}>₽</span>
            </span>
            {children}
        </span>
    </div>
);

export const ProductSnippetCost = memo((props: ProductSnippetCostProps) => {
    const { className, href, cost, chefBank } = props;

    const costStr = cost.toString().replace(/\B(?=(?:\d{3})+\b)/g, '\u2009'); // == '&thinsp;'

    return (
        <div className={classNames(cls.ProductSnippetCost, {}, [className])}>
            <div className={cls.price} data-baobab-name="price">
                <div data-cs-name="navigate">
                    <Link
                        to={href}
                        className={cls.link}
                        data-auto="snippet-link"
                    >
                        <div tabIndex={0}>
                            <span className="ds-visuallyHidden">
                                Цена {costStr} ₽
                            </span>
                            <Cost cost={costStr}>{chefBank}</Cost>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
});
