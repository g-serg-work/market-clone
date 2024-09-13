import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryItem } from './CategoryItem';
import categoryWebp from '@/shared/assets/tests/category-item.webp';

export default {
    title: 'entities/Category/CategoryItem',
    component: CategoryItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategoryItem>;

const Template: ComponentStory<typeof CategoryItem> = (args) => (
    <CategoryItem {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    img: categoryWebp,
    href: 'about:blank',
};
