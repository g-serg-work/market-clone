import { ComponentMeta, ComponentStory } from '@storybook/react';
import { PageBanner } from './PageBanner';
import { RouterDecorator } from '@/shared/config/storybook';

export default {
    title: 'entities/PageBanner',
    component: PageBanner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof PageBanner>;

const Template: ComponentStory<typeof PageBanner> = (args) => (
    <PageBanner {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    headerImg: 'tests/assets/banner-sale.webp',
    bgImg: 'tests/assets/banner-sale-bg.webp',
    href: 'about:blank',
    body: 'CaruselList',
};
