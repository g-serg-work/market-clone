import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileAvatar from './UserProfileAvatar';
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

export const Primary = Template.bind({});
Primary.args = {
    userName: 'test',
    userEmail: 'test@test.ru',
    href: 'https://test.ru',
};
