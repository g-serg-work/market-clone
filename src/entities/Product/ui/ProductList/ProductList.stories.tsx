import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductList, ProductListProps } from './ProductList';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'entities/Product/ProductList',
    component: ProductList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof ProductList>;

const Template: ComponentStory<typeof ProductList> = (args) => (
    <ProductList {...args} />
);

const args: ProductListProps = {
    items: [
        {
            id: 'item1',
            title: 'item1',
            images: [],
            imgTest: 'tests/assets/product-item.webp',
            href: 'about:blank',
        },
        {
            id: 'item2',
            title: 'item2',
            images: [],
            imgTest: 'tests/assets/product-item.webp',
            href: 'about:blank',
        },
        {
            id: 'item3',
            title: 'item3',
            images: [],
            imgTest: 'tests/assets/product-item.webp',
            href: 'about:blank',
        },
    ],
};

export const Primary = Template.bind({});
Primary.args = args;
