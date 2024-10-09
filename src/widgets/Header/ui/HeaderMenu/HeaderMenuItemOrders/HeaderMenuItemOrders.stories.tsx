import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderMenuItemOrders } from './HeaderMenuItemOrders';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/Header/HeaderMenu/HeaderMenuItemOrders',
    component: HeaderMenuItemOrders,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof HeaderMenuItemOrders>;

const Template: ComponentStory<typeof HeaderMenuItemOrders> = (args) => (
    <HeaderMenuItemOrders {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithCount = Template.bind({});
WithCount.args = { count: 3 };

export const WithFocus = Template.bind({});
WithFocus.args = { autoFocus: true };
