import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ProductSnippetCost,
    ProductSnippetCostProps,
} from './ProductSnippetCost';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { ChefBankNames } from '@/entities/ChefBank';

export default {
    title: 'entities/ProductSnippet/ProductSnippet/ProductSnippetCost',
    component: ProductSnippetCost,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StyledDecorator({ maxWidth: 500 })],
} as ComponentMeta<typeof ProductSnippetCost>;

const Template: ComponentStory<typeof ProductSnippetCost> = (args) => (
    <ProductSnippetCost {...args} />
);

const args: ProductSnippetCostProps = {
    href: 'about:blank',
    cost: { value: 1000 },
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithSale = Template.bind({});
WithSale.args = {
    ...args,
    cost: {
        ...args.cost,
        sale: { percent: 25 },
    },
};

export const WithChefBankAlfa = Template.bind({});
WithChefBankAlfa.args = {
    ...args,
    cost: {
        ...args.cost,
        chefBank: { name: ChefBankNames.ALFA, percent: 5 },
    },
};

export const WithChefBankYaPay = Template.bind({});
WithChefBankYaPay.args = {
    ...args,
    cost: {
        ...args.cost,
        chefBank: { name: ChefBankNames.YA_PAY, percent: 5 },
    },
};
