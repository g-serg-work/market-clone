import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkBestSellers } from './LinkBestSellers';
import { RouterDecorator } from '@/shared/config/storybook';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'shared/LinkBestSellers',
    component: LinkBestSellers,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        RouterDecorator,
        StyledDecorator({ backgroundColor: '#b474dd' }),
    ],
} as ComponentMeta<typeof LinkBestSellers>;

const Template: ComponentStory<typeof LinkBestSellers> = (args) => (
    <LinkBestSellers {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    href: 'about:blank',
};
