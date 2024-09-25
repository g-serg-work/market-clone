import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkBestSellers } from './LinkBestSellers';
import { RouterDecorator, StoryWrapper } from '@/shared/config/storybook';

export default {
    title: 'shared/LinkBestSellers',
    component: LinkBestSellers,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof LinkBestSellers>;

const Template: ComponentStory<typeof LinkBestSellers> = (args) => (
    <StoryWrapper backgroundColor={'#b474dd'}>
        <LinkBestSellers {...args} />
    </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
    href: 'about:blank',
};
