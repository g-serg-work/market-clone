import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileSocial, { UserProfileSocialProps } from './UserProfileSocial';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/UserProfile/UserProfileSocial',
    component: UserProfileSocial,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof UserProfileSocial>;

const Template: ComponentStory<typeof UserProfileSocial> = (args) => (
    <UserProfileSocial {...args} />
);

const args: UserProfileSocialProps = {
    href: '/social',
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithFocus = Template.bind({});
WithFocus.args = { ...args, autoFocus: true };
