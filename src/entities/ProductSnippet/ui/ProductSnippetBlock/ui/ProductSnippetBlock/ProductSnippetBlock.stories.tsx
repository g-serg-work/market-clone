import { ComponentStory, ComponentMeta } from '@storybook/react';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import {
    ProductSnippetBlock,
    ProductSnippetBlockProps,
} from './ProductSnippetBlock';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { Product } from '@/entities/Product';
import { ChefBankNames } from '@/entities/ChefBank';

export default {
    title: 'entities/ProductSnippet/ProductSnippetBlock/ProductSnippetBlock',
    component: ProductSnippetBlock,
    argTypes: {
        bgColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StyledDecorator({ maxWidth: 500 })],
} as ComponentMeta<typeof ProductSnippetBlock>;

const Template: ComponentStory<typeof ProductSnippetBlock> = (args) => (
    <ProductSnippetBlock {...args} />
);

const product: Product = {
    id: 'id',
    title: 'product-title',
    images: [],
    imgTest: 'tests/assets/product-item.webp',
    href: 'about:blank',
};

const args: ProductSnippetBlockProps = {
    header: 'product-snippet-header',
    title: 'product-snippet-title',
    href: 'about-blank',
    bgColor: '#FCCCCE',
    products: [product],
};

export const Primary = Template.bind({});
Primary.args = args;

export const MoreOne = Template.bind({});
MoreOne.args = {
    ...args,
    products: [product, product, product],
};

export const WithDiscountCost = Template.bind({});
WithDiscountCost.args = {
    ...args,
    products: [product, product, product].map((product) => ({
        ...product,
        cost: {
            value: 1000,
            discount: { percent: 15, forYou: true, isSuperPrice: true },
            chefBank: { name: ChefBankNames.ALFA, percent: 5 },
        },
    })),
};
