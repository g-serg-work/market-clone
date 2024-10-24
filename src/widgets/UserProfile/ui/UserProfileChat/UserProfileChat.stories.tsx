import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileChat, { UserProfileChatProps } from './UserProfileChat';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/UserProfile/UserProfileChat',
    component: UserProfileChat,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof UserProfileChat>;

const Template: ComponentStory<typeof UserProfileChat> = (args) => (
    <UserProfileChat {...args} />
);

const args: UserProfileChatProps = {};

export const Primary = Template.bind({});
Primary.args = args;
