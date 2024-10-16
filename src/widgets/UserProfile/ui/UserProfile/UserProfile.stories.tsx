import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import { User } from '@/entities/User';
import { UserProfile } from './UserProfile';

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

const userData: User = {
    id: '1',
    userName: 'test',
    userEmail: 'test@market-clone.ru',
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
            userData,
        },
    }),
];

export const WithFocus = Template.bind({});
WithFocus.args = { autoFocus: true };
WithFocus.decorators = [
    StoreDecorator({
        user: {
            userData,
        },
    }),
];

export const WithOrders = Template.bind({});
WithOrders.args = {};
WithOrders.decorators = [
    StoreDecorator({
        user: {
            userData: { ...userData, ordersList: Array(3).fill('') },
        },
    }),
];

export const WithWishList = Template.bind({});
WithWishList.args = {};
WithWishList.decorators = [
    StoreDecorator({
        user: {
            userData: { ...userData, wishList: Array(3).fill('') },
        },
    }),
];

export const WithFavoriteSelected = Template.bind({});
WithFavoriteSelected.args = {};
WithFavoriteSelected.decorators = [
    StoreDecorator({
        user: {
            userData: {
                ...userData,
                favoriteCategory: {
                    ...userData.favoriteCategory,
                    selected: Array(3).fill(''),
                },
            },
        },
    }),
];
