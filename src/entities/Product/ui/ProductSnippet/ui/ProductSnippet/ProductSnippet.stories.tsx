import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductSnippet, ProductSnippetProps } from './ProductSnippet';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { ChefBankAlfa } from '@/shared/ui/ChefBankAlfa';

export default {
    title: 'entities/Product/ProductSnippet',
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
    images: [],
    imgTest: 'tests/assets/product-item.webp',
    href: 'about:blank',
    cost: 12345,
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithDiscount = Template.bind({});
WithDiscount.args = { ...args, discount: 15 };

export const WithChefBankAlfa = Template.bind({});
WithChefBankAlfa.args = { ...args, chefBank: <ChefBankAlfa /> };
