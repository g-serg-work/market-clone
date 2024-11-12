import { memo } from 'react';
import cls from './RecomRollBlock.module.scss';
import classNames from '@/shared/lib/helpers/classNames';
import { ProductRecom } from '@/entities/Product';
import { ProductSnippetBlock } from '@/entities/ProductSnippet';
import { RecomRollRow } from '@/entities/RecomRoll';

export interface RecomRollBlockProps {
    className?: string;
    row: RecomRollRow;
}

type GridLayoutItem = [row: number | string, column: number | string];

const GridLayoutItemCfg: GridLayoutItem[] = [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    ['1/3', '5/7'],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    ['3/5', '1/3'],
    [3, 3],
    [3, 4],
    [3, 5],
    [3, 6],
    [4, 3],
    [4, 4],
    [4, 5],
    [4, 6],
];

export const RecomRollBlock = memo((props: RecomRollBlockProps) => {
    const { className, row } = props;

    let productIdx = 0;
    let blockIdx = 0;

    return (
        <div
            className={classNames(cls.RecomRollBlock, {}, [className])}
            data-apiary-widget-name="@marketfront/RecomLayout"
        >
            <div className={cls.wrapper} data-id="main_tab-RecommendationRoll">
                {GridLayoutItemCfg.map((item, idx) => {
                    const isBlock = typeof item[0] === 'string';
                    if (isBlock && blockIdx >= row.snippetBlocks.length)
                        return null;
                    if (!isBlock && productIdx >= row.products.length)
                        return null;

                    return (
                        <div
                            key={idx}
                            className={cls.item}
                            style={{ gridRow: item[0], gridColumn: item[1] }}
                        >
                            {isBlock ? (
                                <ProductSnippetBlock
                                    // eslint-disable-next-line no-plusplus
                                    {...row.snippetBlocks[blockIdx++]}
                                />
                            ) : (
                                <ProductRecom
                                    // eslint-disable-next-line no-plusplus
                                    product={row.products[productIdx++]}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
