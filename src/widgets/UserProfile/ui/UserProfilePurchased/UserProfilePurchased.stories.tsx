import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfilePurchased, {
    UserProfilePurchasedProps,
} from './UserProfilePurchased';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/UserProfile/UserProfilePurchased',
    component: UserProfilePurchased,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof UserProfilePurchased>;

const Template: ComponentStory<typeof UserProfilePurchased> = (args) => (
    <UserProfilePurchased {...args} />
);

const args: UserProfilePurchasedProps = {
    route: '/purchased',
};

export const Primary = Template.bind({});
Primary.args = args;

export const WithFocus = Template.bind({});
WithFocus.args = { ...args, autoFocus: true };
