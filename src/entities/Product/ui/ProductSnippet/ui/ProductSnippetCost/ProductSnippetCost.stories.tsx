import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ProductSnippetCost,
    ProductSnippetCostProps,
} from './ProductSnippetCost';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { ChefBankAlfa } from '@/shared/ui/ChefBankAlfa';

export default {
    title: 'entities/Product/ProductSnippetCost',
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
    cost: 12345,
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithChefBankAlfa = Template.bind({});
WithChefBankAlfa.args = { ...args, chefBank: <ChefBankAlfa /> };
