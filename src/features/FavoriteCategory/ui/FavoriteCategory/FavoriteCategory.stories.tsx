import { ComponentStory, ComponentMeta } from '@storybook/react';

import FavoriteCategory from './FavoriteCategory';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/FavoriteCategory/FavoriteCategory',
    component: FavoriteCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FavoriteCategory>;

const Template: ComponentStory<typeof FavoriteCategory> = (args) => (
    <FavoriteCategory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        user: {
            userData: { id: '1' },
        },
    }),
];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/favorite-category/1`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: 'item1',
                    img: '/tests/assets/category-item.webp',
                    href: 'about:blank',
                },
                {
                    id: 'item2',
                    img: '/tests/assets/category-item.webp',
                    href: 'about:blank',
                },
            ],
        },
    ],
};

export const WithoutFavorite = Template.bind({});
WithoutFavorite.args = {};
WithoutFavorite.decorators = [
    StoreDecorator({
        user: {
            userData: { id: '2' },
        },
    }),
];
WithoutFavorite.parameters = {
    mockData: [
        {
            url: `${__API__}/favorite-category/2`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
