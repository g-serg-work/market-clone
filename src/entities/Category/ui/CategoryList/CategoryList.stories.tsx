import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryList } from './CategoryList';

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

export const Primary = Template.bind({});
Primary.args = {
    items: [
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
        {
            id: 'item3',
            img: '/tests/assets/category-item.webp',
            href: 'about:blank',
        },
    ],
};
