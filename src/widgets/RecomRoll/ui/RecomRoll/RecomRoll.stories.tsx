import { ComponentStory, ComponentMeta } from '@storybook/react';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import { RecomRoll, RecomRollProps } from './RecomRoll';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import { RecomRollRow, RecomRollTypes } from '@/entities/RecomRoll';
import { Product } from '@/entities/Product';
import { SnippetBlock } from '@/entities/ProductSnippet';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'widgets/RecomRoll/RecomRoll',
    component: RecomRoll,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator,
        StoreDecorator({}),
        StyledDecorator({ maxWidth: 1440 }),
    ],
} as ComponentMeta<typeof RecomRoll>;

const Template: ComponentStory<typeof RecomRoll> = (args) => (
    <RecomRoll {...args} />
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

const row: RecomRollRow = {
    hasNext: true,
    products: [product, product],
    snippetBlocks: [snippetBlock],
};

const args: RecomRollProps = {
    type: RecomRollTypes.GUEST,
};

export const Primary = Template.bind({});
Primary.args = args;
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/recom-roll?type=guest&offset=0`,
            method: 'GET',
            status: 200,
            response: row,
        },
    ],
};

export const WithError = Template.bind({});
WithError.args = args;
WithError.parameters = {
    mockData: [
        {
            url: `${__API__}/recom-roll?type=guest&offset=0`,
            method: 'GET',
            status: 404,
            response: [],
        },
    ],
};
