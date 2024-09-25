export type ProductId = string;

export interface Product {
    id: ProductId;
    title: string;
    href: string;
    img: string;
    imgTest?: string;
}
