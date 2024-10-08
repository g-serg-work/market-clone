import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Banner } from './Banner';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'entities/Banner/Banner',
    component: Banner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    headerImg: 'tests/assets/banner-sale.webp',
    bgImg: 'tests/assets/banner-sale-bg.webp',
    href: 'about:blank',
    body: 'CaruselList',
};
