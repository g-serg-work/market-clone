import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductItem } from './ProductItem';
import { RouterDecorator, StoryWrapper } from '@/shared/config/storybook';

export default {
    title: 'entities/Product/ProductItem',
    component: ProductItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
    <StoryWrapper maxWidth={500}>
        <ProductItem {...args} />
    </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
    img: '/tests/assets/product-item.webp',
    href: 'about:blank',
};
