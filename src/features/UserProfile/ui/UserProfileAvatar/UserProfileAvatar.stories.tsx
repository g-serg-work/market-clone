import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileAvatar, { UserProfileAvatarProps } from './UserProfileAvatar';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'features/UserProfile/UserProfileAvatar',
    component: UserProfileAvatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StyledDecorator({
            margin: 20,
        }),
    ],
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
