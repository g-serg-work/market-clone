import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfilePartner, {
    UserProfilePartnerProps,
} from './UserProfilePartner';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/UserProfile/UserProfilePartner',
    component: UserProfilePartner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof UserProfilePartner>;

const Template: ComponentStory<typeof UserProfilePartner> = (args) => (
    <UserProfilePartner {...args} />
);

const args: UserProfilePartnerProps = {
    href: '/partner',
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithFocus = Template.bind({});
WithFocus.args = { ...args, autoFocus: true };
