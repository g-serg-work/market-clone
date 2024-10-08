import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BannerTitle } from './BannerTitle';

export default {
    title: 'entities/Banner/BannerTitle',
    component: BannerTitle,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BannerTitle>;

const Template: ComponentStory<typeof BannerTitle> = (args) => (
    <BannerTitle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    img: 'tests/assets/banner-sale.webp',
};
