import { ComponentStory, ComponentMeta } from '@storybook/react';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { RecomRollBlock, RecomRollBlockProps } from './RecomRollBlock';
import { Product } from '@/entities/Product';
import { SnippetBlock } from '@/entities/ProductSnippet';
import { ChefBankNames } from '@/entities/ChefBank';

export default {
    title: 'widgets/RecomRoll/RecomRollBlock',
    component: RecomRollBlock,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StyledDecorator({ maxWidth: 1440 })],
} as ComponentMeta<typeof RecomRollBlock>;

const Template: ComponentStory<typeof RecomRollBlock> = (args) => (
    <RecomRollBlock {...args} />
);

const product: Product = {
    id: 'id',
    title: 'product-title',
    images: [],
    imgTest: 'tests/assets/product-item.webp',
    href: 'about:blank',
};

const snippetBlock: SnippetBlock = {
    header: 'product-snippet-header',
    title: 'product-snippet-title',
    href: 'about-blank',
    bgColor: '#FCCCCE',
    products: [product],
};

const args: RecomRollBlockProps = {
    row: {
        hasNext: true,
        products: [product, product],
        snippetBlocks: [snippetBlock],
    },
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithDiscountCost = Template.bind({});
WithDiscountCost.args = {
    ...args,
    row: {
        ...args.row,
        products: [product, product].map((product) => ({
            ...product,
            cost: {
                value: 1000,
                discount: { percent: 15, forYou: true, isSuperPrice: true },
                chefBank: { name: ChefBankNames.ALFA, percent: 5 },
            },
        })),
    },
};
