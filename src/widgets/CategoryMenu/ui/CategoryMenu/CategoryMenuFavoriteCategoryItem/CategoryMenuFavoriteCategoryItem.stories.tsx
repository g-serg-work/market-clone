import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CategoryMenuFavoriteCategoryItem } from './CategoryMenuFavoriteCategoryItem';

export default {
    title: 'widgets/CategoryMenu/CategoryMenu/CategoryMenuFavoriteCategoryItem',
    component: CategoryMenuFavoriteCategoryItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategoryMenuFavoriteCategoryItem>;

const Template: ComponentStory<typeof CategoryMenuFavoriteCategoryItem> = (
    args,
) => <CategoryMenuFavoriteCategoryItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
