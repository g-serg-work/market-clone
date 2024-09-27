import { ComponentMeta, ComponentStory } from '@storybook/react';
import { WishListHeaderDesktopItem } from './WishListHeaderDesktopItem';

export default {
    title: 'shared/WishListHeaderDesktopItem',
    component: WishListHeaderDesktopItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof WishListHeaderDesktopItem>;

const Template: ComponentStory<typeof WishListHeaderDesktopItem> = (args) => (
    <WishListHeaderDesktopItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
