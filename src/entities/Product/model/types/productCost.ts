import { ChefBankNames } from '@/entities/ChefBank';

interface ChefBank {
    name: ChefBankNames;
    percent: number;
}

interface Discount {
    percent: number;
    forYou?: boolean;
    isSuperPrice?: boolean;
}

interface Sale {
    percent: number;
}

interface PromoCode {
    name: string;
    percent: number;
}

/**
 * 2, 4, 6, 12 mount commission
 */
type CostSplit = [number, number, number, number];

export interface ProductCost {
    value: number;
    sale?: Sale;
    promoCode?: PromoCode;
    discount?: Discount;
    chefBank?: ChefBank;
    split?: CostSplit;
}
