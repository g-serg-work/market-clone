import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderMenu } from './HeaderMenu';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/Header/HeaderMenu',
    component: HeaderMenu,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof HeaderMenu>;

const Template: ComponentStory<typeof HeaderMenu> = (args) => (
    <HeaderMenu {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const WithOrdersList = Template.bind({});
WithOrdersList.args = {};
WithOrdersList.decorators = [
    StoreDecorator({
        user: {
            userData: { ordersList: Array(2).fill('') },
        },
    }),
];

export const WithWishList = Template.bind({});
WithWishList.args = {};
WithWishList.decorators = [
    StoreDecorator({
        user: {
            userData: { wishList: Array(3).fill('') },
        },
    }),
];

export const WithCartList = Template.bind({});
WithCartList.args = {};
WithCartList.decorators = [
    StoreDecorator({
        user: {
            userData: { cartList: Array(4).fill('') },
        },
    }),
];

export const WithNotification = Template.bind({});
WithNotification.args = {};
WithNotification.decorators = [
    StoreDecorator({
        user: {
            userData: { hasNotification: true },
        },
    }),
];
