import { Order } from '@/entities/Order';
import { UserId } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';

export interface GetOrdersArg {
    userId: UserId;
}

const ordersPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getOrdersPage: build.query<Order[], GetOrdersArg>({
            query: ({ userId }) => ({
                url: `/orders/${userId}`,
            }),
        }),
    }),
});

export const useOrdersPage = ordersPageApi.useGetOrdersPageQuery;
