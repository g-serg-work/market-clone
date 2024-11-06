import { ProductCost } from '../../types/productCost';

export function priceFromCost(cost: ProductCost): number {
    let { value } = cost;
    const { sale = null, discount = null, chefBank = null } = cost;

    if (sale) value -= (value * sale.percent) / 100;
    if (discount) value -= (value * discount.percent) / 100;
    if (chefBank) value -= (value * chefBank.percent) / 100;

    return value;
}
