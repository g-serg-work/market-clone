import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BannerLink } from './BannerLink';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'entities/Banner/BannerLink',
    component: BannerLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator,
        StyledDecorator({ backgroundColor: '#b474dd' }),
    ],
} as ComponentMeta<typeof BannerLink>;

const Template: ComponentStory<typeof BannerLink> = (args) => (
    <BannerLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    href: 'about:blank',
};
