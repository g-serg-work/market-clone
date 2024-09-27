import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderDesktopMenu } from './HeaderDesktopMenu';
import { RouterDecorator, StoreDecorator } from '@/shared/config/storybook';

export default {
    title: 'entities/HeaderDesktopMenu/HeaderDesktopMenu',
    component: HeaderDesktopMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof HeaderDesktopMenu>;

const Template: ComponentStory<typeof HeaderDesktopMenu> = (args) => (
    <HeaderDesktopMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const WithNotification = Template.bind({});
WithNotification.args = {};
WithNotification.decorators = [
    StoreDecorator({
        user: {
            authData: { hasNotification: true },
        },
    }),
];

export const WithWishList = Template.bind({});
WithWishList.args = {};
WithWishList.decorators = [
    StoreDecorator({
        user: {
            authData: { wishList: Array(3).fill('') },
        },
    }),
];
