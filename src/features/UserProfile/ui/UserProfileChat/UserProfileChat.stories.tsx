import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileChat, { UserProfileChatProps } from './UserProfileChat';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import { RouterDecorator } from '@/shared/config/storybook';

export default {
    title: 'features/UserProfile/UserProfileChat',
    component: UserProfileChat,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StyledDecorator({
            margin: 20,
        }),
        RouterDecorator,
    ],
} as ComponentMeta<typeof UserProfileChat>;

const Template: ComponentStory<typeof UserProfileChat> = (args) => (
    <UserProfileChat {...args} />
);

const args: UserProfileChatProps = {};

export const Primary = Template.bind({});
Primary.args = args;

export const WithFocus = Template.bind({});
WithFocus.args = { ...args, autoFocus: true };
