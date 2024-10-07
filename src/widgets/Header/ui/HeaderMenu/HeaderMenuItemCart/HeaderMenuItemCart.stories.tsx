import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderMenuItemCart } from './HeaderMenuItemCart';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/Header/HeaderMenu/HeaderMenuItemCart',
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
