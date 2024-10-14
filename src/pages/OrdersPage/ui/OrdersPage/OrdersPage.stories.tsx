import { ComponentMeta, ComponentStory } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import MemoryRouterDecorator from '@/shared/config/storybook/MemoryRouterDecorator';
import { Order } from '@/entities/Order';
import { OrdersPage } from './OrdersPage';

export default {
    title: 'pages/OrdersPage/OrdersPage',
    component: OrdersPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({
            user: {
                userData: { id: '1' },
            },
        }),
        MemoryRouterDecorator('/orders/user1', '/orders/:userId'),
    ],
} as ComponentMeta<typeof OrdersPage>;

const Template: ComponentStory<typeof OrdersPage> = (args) => (
    <OrdersPage {...args} />
);

const item: Order = {
    number: 'OrderNumber',
    fromDate: 'from date',
    status: 'status',
    statusDate: 'status date',
    cost: 1234,
    images: [],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/orders/1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    ...item,
                    images: [
                        '/tests/assets/order-item0.png',
                        '/tests/assets/order-item1.jpg',
                    ],
                },
            ],
        },
    ],
};

export const MoreThreeItems = Template.bind({});
MoreThreeItems.args = {};
MoreThreeItems.parameters = {
    mockData: [
        {
            url: `${__API__}/orders/1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    ...item,
                    images: [
                        '/tests/assets/order-item0.png',
                        '/tests/assets/order-item1.jpg',
                        '/tests/assets/order-item1.jpg',
                        '/tests/assets/order-item1.jpg',
                        '/tests/assets/order-item1.jpg',
                    ],
                },
            ],
        },
    ],
};
