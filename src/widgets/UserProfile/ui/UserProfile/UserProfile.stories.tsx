import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfile from './UserProfile';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import { User } from '@/entities/User';

export default {
    title: 'widgets/UserProfile/UserProfile',
    component: UserProfile,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof UserProfile>;

const Template: ComponentStory<typeof UserProfile> = (args) => (
    <UserProfile {...args} />
);

const authData: User = {
    id: '1',
    userName: 'test',
    userEmail: 'test@yandex.ru',
    wishList: [],
    ordersList: [],
    cartList: [],
    favoriteCategory: {
        hint: 'favorite hint',
        selected: [],
    },
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        user: {
            authData,
        },
    }),
];

export const WithFocus = Template.bind({});
WithFocus.args = { autoFocus: true };
WithFocus.decorators = [
    StoreDecorator({
        user: {
            authData,
        },
    }),
];

export const WithOrders = Template.bind({});
WithOrders.args = {};
WithOrders.decorators = [
    StoreDecorator({
        user: {
            authData: { ...authData, ordersList: Array(3).fill('') },
        },
    }),
];

export const WithWishList = Template.bind({});
WithWishList.args = {};
WithWishList.decorators = [
    StoreDecorator({
        user: {
            authData: { ...authData, wishList: Array(3).fill('') },
        },
    }),
];

export const WithFavoriteSelected = Template.bind({});
WithFavoriteSelected.args = {};
WithFavoriteSelected.decorators = [
    StoreDecorator({
        user: {
            authData: {
                ...authData,
                favoriteCategory: {
                    ...authData.favoriteCategory,
                    selected: Array(3).fill(''),
                },
            },
        },
    }),
];
