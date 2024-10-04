import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductItem } from './ProductItem';
import { RouterDecorator } from '@/shared/config/storybook';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'entities/Product/ProductItem',
    component: ProductItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StyledDecorator({ maxWidth: 500 })],
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
    <ProductItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    img: '/tests/assets/product-item.webp',
    href: 'about:blank',
};
