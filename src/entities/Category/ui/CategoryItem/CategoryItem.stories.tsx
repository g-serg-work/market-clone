import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryItem } from './CategoryItem';
import { RouterDecorator } from '@/shared/config/storybook';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'entities/Category/CategoryItem',
    component: CategoryItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StyledDecorator({ maxWidth: 500 })],
} as ComponentMeta<typeof CategoryItem>;

const Template: ComponentStory<typeof CategoryItem> = (args) => (
    <CategoryItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    img: '/tests/assets/category-item.webp',
    href: 'about:blank',
};
