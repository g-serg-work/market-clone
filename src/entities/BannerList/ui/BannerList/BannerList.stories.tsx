import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BannerList } from './BannerList';
import bannerWebp from '@/shared/assets/tests/banner.webp';
import { CaruselList } from '@/entities/Carusel';

export default {
    title: 'entities/BannerList',
    component: BannerList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof BannerList>;

const Template: ComponentStory<typeof BannerList> = (args) => (
    <BannerList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    titleImgPath: bannerWebp,
    body: <CaruselList />,
    href: 'about:blank',
};
