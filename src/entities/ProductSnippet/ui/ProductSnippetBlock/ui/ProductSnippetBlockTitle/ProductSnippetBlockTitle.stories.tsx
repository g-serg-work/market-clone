import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ProductSnippetBlockTitle,
    ProductSnippetBlockTitleProps,
} from './ProductSnippetBlockTitle';

export default {
    title: 'entities/ProductSnippet/ProductSnippetBlock/ProductSnippetBlockTitle',
    component: ProductSnippetBlockTitle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [],
} as ComponentMeta<typeof ProductSnippetBlockTitle>;

const Template: ComponentStory<typeof ProductSnippetBlockTitle> = (args) => (
    <ProductSnippetBlockTitle {...args} />
);

const args: ProductSnippetBlockTitleProps = {
    header: 'product-snippet-header',
    title: 'product-snippet-title',
};

export const Primary = Template.bind({});
Primary.args = args;
