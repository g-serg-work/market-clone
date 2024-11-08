import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
    ProductSnippetBlockLink,
    ProductSnippetBlockLinkProps,
} from './ProductSnippetBlockLink';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'entities/Product/ProductSnippetBlock/ProductSnippetBlockLink',
    component: ProductSnippetBlockLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof ProductSnippetBlockLink>;

const Template: ComponentStory<typeof ProductSnippetBlockLink> = (args) => (
    <ProductSnippetBlockLink {...args} />
);

const args: ProductSnippetBlockLinkProps = {
    href: 'about-blank',
};

export const Primary = Template.bind({});
Primary.args = args;
