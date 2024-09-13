import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryList } from './CategoryList';
import categoryWebp from '@/shared/assets/tests/category-item.webp';

export default {
    title: 'entities/Category/CategoryList',
    component: CategoryList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategoryList>;

const Template: ComponentStory<typeof CategoryList> = (args) => (
    <CategoryList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    items: [
        {
            id: 'item1',
            img: categoryWebp,
            href: 'about:blank',
        },
        {
            id: 'item2',
            img: categoryWebp,
            href: 'about:blank',
        },
        {
            id: 'item3',
            img: categoryWebp,
            href: 'about:blank',
        },
    ],
};
