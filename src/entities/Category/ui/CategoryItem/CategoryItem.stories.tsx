import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryItem } from './CategoryItem';

export default {
    title: 'entities/Category/CategoryItem',
    component: CategoryItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategoryItem>;

const Template: ComponentStory<typeof CategoryItem> = (args) => (
    <div style={{ maxWidth: 500 }}>
        <CategoryItem {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    img: '/tests/assets/category-item.webp',
    href: 'about:blank',
};
