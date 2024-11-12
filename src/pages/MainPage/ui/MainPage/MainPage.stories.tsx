import { ComponentMeta, ComponentStory } from '@storybook/react';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import { MainPage } from '../..';
import { Product } from '@/entities/Product';
import { SnippetBlock } from '@/entities/ProductSnippet';
import { RecomRollRow } from '@/entities/RecomRoll';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), RouterDecorator],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

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

const rows: RecomRollRow[] = [
    {
        products: [product, product],
        snippetBlocks: [snippetBlock],
    },
];

export const Primary = Template.bind({});
Primary.args = {};

Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/recom-roll?type=guest&offset=0`,
            method: 'GET',
            status: 200,
            response: rows,
        },
    ],
};

export const WithError = Template.bind({});
WithError.args = {};
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
