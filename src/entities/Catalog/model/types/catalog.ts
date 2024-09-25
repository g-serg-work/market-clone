import { Category } from '@/entities/Category';
import { Product } from '@/entities/Product';

export interface CatalogBanner {
    href: string;
    bgImg: string;
    headerImg: string;
    carusel: Product[];
}

export type CatalogId = string;

export interface Catalog {
    id: CatalogId;
    title: string;
    description: string;
    banners: CatalogBanner[];
    categories: Category[];
}
