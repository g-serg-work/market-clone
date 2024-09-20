import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductList, ProductListProps } from './ProductList';

export default {
    title: 'entities/Product/ProductList',
    component: ProductList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => (
    <ProductList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            id: 'item1',
            title: 'item1',
            img: '/tests/assets/product-item.webp',
            href: 'about:blank',
        },
        {
            id: 'item2',
            title: 'item2',
            img: '/tests/assets/product-item.webp',
            href: 'about:blank',
        },
        {
            id: 'item3',
            title: 'item3',
            img: '/tests/assets/product-item.webp',
            href: 'about:blank',
        },
    ],
};
