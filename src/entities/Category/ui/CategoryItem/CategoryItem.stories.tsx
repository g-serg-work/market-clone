import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryItem } from './CategoryItem';
import { StoryWrapper } from '@/shared/config/storybook';

export default {
    title: 'entities/Category/CategoryItem',
    component: CategoryItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategoryItem>;

const Template: ComponentStory<typeof CategoryItem> = (args) => (
    <StoryWrapper maxWidth={500}>
        <CategoryItem {...args} />
    </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
    img: '/tests/assets/category-item.webp',
    href: 'about:blank',
};
