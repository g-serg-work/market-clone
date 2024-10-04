import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderDesktopMenu } from './HeaderDesktopMenu';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

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

export const WithOrdersList = Template.bind({});
WithOrdersList.args = {};
WithOrdersList.decorators = [
    StoreDecorator({
        user: {
            authData: { ordersList: Array(2).fill('') },
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

export const WithCartList = Template.bind({});
WithCartList.args = {};
WithCartList.decorators = [
    StoreDecorator({
        user: {
            authData: { cartList: Array(4).fill('') },
        },
    }),
];

export const WithNotification = Template.bind({});
WithNotification.args = {};
WithNotification.decorators = [
    StoreDecorator({
        user: {
            authData: { hasNotification: true },
        },
    }),
];
