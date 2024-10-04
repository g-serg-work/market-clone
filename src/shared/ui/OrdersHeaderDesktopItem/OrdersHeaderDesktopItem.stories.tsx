import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OrdersHeaderDesktopItem } from './OrdersHeaderDesktopItem';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'shared/OrdersHeaderDesktopItem',
    component: OrdersHeaderDesktopItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof OrdersHeaderDesktopItem>;

const Template: ComponentStory<typeof OrdersHeaderDesktopItem> = (args) => (
    <OrdersHeaderDesktopItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
