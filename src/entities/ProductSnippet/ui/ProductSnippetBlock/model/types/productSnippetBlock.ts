import { Product } from '@/entities/Product';

export interface SnippetBlock {
    header: string;
    title: string;
    bgColor: string;
    href: string;
    products: Product[];
}
