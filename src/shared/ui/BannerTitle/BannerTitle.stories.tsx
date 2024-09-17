import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BannerTitle, BannerTitleProps } from './BannerTitle';

const props: BannerTitleProps = {
    bannerId: 'sale',
};

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
Primary.args = props;
