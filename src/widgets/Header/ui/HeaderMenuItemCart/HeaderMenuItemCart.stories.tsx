import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderMenuItemCart } from './HeaderMenuItemCart';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/Header/HeaderMenuItemCart',
    component: HeaderMenuItemCart,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof HeaderMenuItemCart>;

const Template: ComponentStory<typeof HeaderMenuItemCart> = (args) => (
    <HeaderMenuItemCart {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithCount = Template.bind({});
WithCount.args = { count: 3 };

export const WithFocus = Template.bind({});
WithFocus.args = { autoFocus: true };
