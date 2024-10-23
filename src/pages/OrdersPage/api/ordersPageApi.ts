import { Order } from '@/entities/Order';
import { rtkApi } from '@/shared/api/rtkApi';

const ordersPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getOrdersPage: build.query<Order[], void>({
            query: () => ({
                url: `/orders`,
            }),
            keepUnusedDataFor: 0,
        }),
    }),
});

export const useOrdersPage = ordersPageApi.useGetOrdersPageQuery;
