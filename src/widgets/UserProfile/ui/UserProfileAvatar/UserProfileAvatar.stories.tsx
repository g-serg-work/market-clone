import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileAvatar, { UserProfileAvatarProps } from './UserProfileAvatar';

export default {
    title: 'widgets/UserProfile/UserProfileAvatar',
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
    userEmail: 'test@market-clone.ru',
    href: 'https://market-clone.ru',
};

export const Primary = Template.bind({});
Primary.args = args;
