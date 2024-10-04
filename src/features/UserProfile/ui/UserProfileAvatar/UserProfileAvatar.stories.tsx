import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileAvatar, { UserProfileAvatarProps } from './UserProfileAvatar';

export default {
    title: 'features/UserProfile/UserProfileAvatar',
    component: UserProfileAvatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof UserProfileAvatar>;

const Template: ComponentStory<typeof UserProfileAvatar> = (args) => (
    <UserProfileAvatar {...args} />
);

const args: UserProfileAvatarProps = {
    userName: 'test',
    userEmail: 'test@test.ru',
    href: 'https://test.ru',
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithFocus = Template.bind({});
WithFocus.args = { ...args, autoFocus: true };
