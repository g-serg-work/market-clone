import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FavoriteCategoryLoader } from './FavoriteCategoryLoader';

export default {
    title: 'features/FavoriteCategory/FavoriteCategoryLoader',
    component: FavoriteCategoryLoader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FavoriteCategoryLoader>;

const Template: ComponentStory<typeof FavoriteCategoryLoader> = (args) => (
    <FavoriteCategoryLoader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithError = Template.bind({});
WithError.args = { children: 'Error Message' };
