import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CartHeaderDesktopItem } from './CartHeaderDesktopItem';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'shared/CartHeaderDesktopItem',
    component: CartHeaderDesktopItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof CartHeaderDesktopItem>;

const Template: ComponentStory<typeof CartHeaderDesktopItem> = (args) => (
    <CartHeaderDesktopItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
