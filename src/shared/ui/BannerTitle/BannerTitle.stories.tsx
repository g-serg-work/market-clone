import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BannerTitle } from './BannerTitle';
import bannerWebp from '@/shared/assets/tests/banner.webp';

export default {
    title: 'shared/BannerTitle',
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
    imgPath: bannerWebp,
};
