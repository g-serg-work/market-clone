import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ProductSnippetImage,
    ProductSnippetImageProps,
} from './ProductSnippetImage';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'entities/Product/ProductSnippetImage',
    component: ProductSnippetImage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StyledDecorator({ maxWidth: 500 })],
} as ComponentMeta<typeof ProductSnippetImage>;

const Template: ComponentStory<typeof ProductSnippetImage> = (args) => (
    <ProductSnippetImage {...args} />
);

const args: ProductSnippetImageProps = {
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
