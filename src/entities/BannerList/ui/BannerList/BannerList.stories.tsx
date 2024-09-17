import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BannerList, BannerListProps } from './BannerList';
import { CaruselList } from '@/entities/Carusel';

const props: BannerListProps = {
    banner: {
        id: 'sale',
        href: 'about:blank',
    },
    carusel: <CaruselList />,
};

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
Primary.args = props;
