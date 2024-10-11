export type OrderId = string;

export interface Order {
    number: OrderId;
    fromDate: string;
    status: string;
    statusDate: string;
    cost: number;
    images: string[];
}
