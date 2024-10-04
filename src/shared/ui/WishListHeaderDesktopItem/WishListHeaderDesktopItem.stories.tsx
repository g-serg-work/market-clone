import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WishListHeaderDesktopItem } from './WishListHeaderDesktopItem';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'shared/WishListHeaderDesktopItem',
    component: WishListHeaderDesktopItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof WishListHeaderDesktopItem>;

const Template: ComponentStory<typeof WishListHeaderDesktopItem> = (args) => (
    <WishListHeaderDesktopItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithCount = Template.bind({});
WithCount.args = {
    count: 3,
};
