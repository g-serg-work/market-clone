import { ComponentMeta, ComponentStory } from '@storybook/react';
import CatalogPage from './CatalogPage';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';
import MemoryRouterDecorator from '@/shared/config/storybook/MemoryRouterDecorator';
import { getRouteCatalog } from '@/shared/const/router';
import { routeConfig } from '@/app/providers/router/config/routeConfig';

export default {
    title: 'pages/CatalogPage',
    component: CatalogPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CatalogPage>;

const Template: ComponentStory<typeof CatalogPage> = (args) => (
    <CatalogPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

Primary.decorators = [
    StoreDecorator({}),
    MemoryRouterDecorator(
        getRouteCatalog('catalog1'),
        routeConfig.catalog.path as string,
    ),
];
Primary.parameters = {
    mockData: [
        {
            url: __API__ + getRouteCatalog('catalog1'),
            method: 'GET',
            status: 200,
            response: {
                id: 'catalog1',
                title: 'catalog-title',
                description: 'catalog-description',
                banners: [
                    {
                        headerImg: 'tests/assets/banner-sale.webp',
                        bgImg: 'tests/assets/banner-sale-bg.webp',
                        href: 'about:blank',
                        carusel: [
                            {
                                id: 'item1',
                                title: 'item1',
                                img: '',
                                imgTest: '/tests/assets/product-item.webp',
                                href: 'about:blank',
                            },
                            {
                                id: 'item2',
                                title: 'item2',
                                img: '',
                                imgTest: '/tests/assets/product-item.webp',
                                href: 'about:blank',
                            },
                        ],
                    },
                ],
                categories: [
                    {
                        id: 'item1',
                        img: '/tests/assets/category-item.webp',
                        href: 'about:blank',
                    },
                    {
                        id: 'item2',
                        img: '/tests/assets/category-item.webp',
                        href: 'about:blank',
                    },
                ],
            },
        },
    ],
};
