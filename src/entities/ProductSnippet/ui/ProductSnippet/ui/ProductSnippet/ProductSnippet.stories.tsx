import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductSnippet, ProductSnippetProps } from './ProductSnippet';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { ChefBankNames } from '@/entities/ChefBank';

export default {
    title: 'entities/Product/ProductSnippet/ProductSnippet',
    component: ProductSnippet,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StyledDecorator({ maxWidth: 500 })],
} as ComponentMeta<typeof ProductSnippet>;

const Template: ComponentStory<typeof ProductSnippet> = (args) => (
    <ProductSnippet {...args} />
);

const args: ProductSnippetProps = {
    product: {
        id: 'id',
        title: 'product-title',
        images: [],
        imgTest: 'tests/assets/product-item.webp',
        href: 'about:blank',
    },
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithCost = Template.bind({});
WithCost.args = {
    ...args,
    product: {
        ...args.product,
        cost: { value: 1000 },
    },
};

export const WithSale = Template.bind({});
WithSale.args = {
    ...args,
    product: {
        ...args.product,
        cost: { value: 1000, sale: { percent: 25 } },
    },
};

export const WithDiscount = Template.bind({});
WithDiscount.args = {
    ...args,
    product: {
        ...args.product,
        cost: { value: 1000, discount: { percent: 15 } },
    },
};

export const WithDiscountForYou = Template.bind({});
WithDiscountForYou.args = {
    ...args,
    product: {
        ...args.product,
        cost: { value: 1000, discount: { percent: 15, forYou: true } },
    },
};

export const WithDiscountSuperPrice = Template.bind({});
WithDiscountSuperPrice.args = {
    ...args,
    product: {
        ...args.product,
        cost: { value: 1000, discount: { percent: 15, isSuperPrice: true } },
    },
};

export const WithChefBankAlfa = Template.bind({});
WithChefBankAlfa.args = {
    ...args,
    product: {
        ...args.product,
        cost: {
            value: 1000,
            chefBank: { name: ChefBankNames.ALFA, percent: 5 },
        },
    },
};

export const WithChefBankYaPay = Template.bind({});
WithChefBankYaPay.args = {
    ...args,
    product: {
        ...args.product,
        cost: {
            value: 1000,
            chefBank: { name: ChefBankNames.YA_PAY, percent: 5 },
        },
    },
};
