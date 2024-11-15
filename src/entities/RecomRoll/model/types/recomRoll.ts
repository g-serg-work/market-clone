import { Product } from '@/entities/Product';
import { SnippetBlock } from '@/entities/ProductSnippet';

export interface RecomRollRow {
    hasNext: boolean;
    products: Product[];
    snippetBlocks: SnippetBlock[];
}

export enum RecomRollTypes {
    GUEST = 'guest',
    FOR_YOU = 'for_you',
    SALE = 'sale',
}

export const recomRollTypeGet = (isSale: boolean, isLogged: boolean) => {
    if (isSale) return RecomRollTypes.SALE;

    return isLogged ? RecomRollTypes.FOR_YOU : RecomRollTypes.GUEST;
};
