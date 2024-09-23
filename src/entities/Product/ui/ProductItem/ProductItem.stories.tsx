import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductItem } from './ProductItem';

export default {
    title: 'entities/Product/ProductItem',
    component: ProductItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProductItem>;

const Template: ComponentStory<typeof ProductItem> = (args) => (
    <div style={{ maxWidth: 500 }}>
        <ProductItem {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {
    img: '/tests/assets/product-item.webp',
    href: 'about:blank',
};
