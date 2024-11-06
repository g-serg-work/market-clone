import { ProductCost } from './productCost';

export type ProductId = string;

export interface Product {
    id: ProductId;
    title: string;
    href: string;
    images: string[];
    imgTest?: string;
    cost?: ProductCost;
}
