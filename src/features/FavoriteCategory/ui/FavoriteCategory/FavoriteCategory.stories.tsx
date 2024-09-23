import { ComponentStory, ComponentMeta } from '@storybook/react';

import FavoriteCategory from './FavoriteCategory';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'features/FavoriteCategory',
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
            authData: { id: '1' },
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

// img: 'https://avatars.mds.yandex.net/get-marketcms//1523779/img-8b0db0e4-ed89-4b72-a95c-edea827477c0.png/optimize',
// href: '/category/detskii-sport',
export const WithoutFavorite = Template.bind({});
WithoutFavorite.args = {};
WithoutFavorite.decorators = [
    StoreDecorator({
        user: {
            authData: { id: '1' },
        },
    }),
];
WithoutFavorite.parameters = {
    mockData: [
        {
            url: `${__API__}/favorite-category/1`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
