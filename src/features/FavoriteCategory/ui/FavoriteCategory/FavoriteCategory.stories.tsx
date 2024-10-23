import { ComponentStory, ComponentMeta } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import { FavoriteCategory } from './FavoriteCategory';

export default {
    title: 'features/FavoriteCategory/FavoriteCategory',
    component: FavoriteCategory,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof FavoriteCategory>;

const Template: ComponentStory<typeof FavoriteCategory> = (args) => (
    <FavoriteCategory {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/favorite-category`,
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
WithoutFavorite.parameters = {
    mockData: [
        {
            url: `${__API__}/favorite-category`,
            method: 'GET',
            status: 200,
            response: [],
        },
    ],
};
