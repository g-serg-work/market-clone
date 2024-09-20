import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FavoriteCategoryItem } from './FavoriteCategoryItem';

export default {
    title: 'entities/HeaderTabs/FavoriteCategoryItem',
    component: FavoriteCategoryItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FavoriteCategoryItem>;

const Template: ComponentStory<typeof FavoriteCategoryItem> = (args) => (
    <FavoriteCategoryItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
