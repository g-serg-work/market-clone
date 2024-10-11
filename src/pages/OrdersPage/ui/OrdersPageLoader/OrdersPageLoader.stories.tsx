import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OrdersPageLoader } from './OrdersPageLoader';

export default {
    title: 'pages/OrdersPage/OrdersPageLoader',
    component: OrdersPageLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof OrdersPageLoader>;

const Template: ComponentStory<typeof OrdersPageLoader> = (args) => (
    <OrdersPageLoader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithError = Template.bind({});
WithError.args = { children: 'Error Message' };
