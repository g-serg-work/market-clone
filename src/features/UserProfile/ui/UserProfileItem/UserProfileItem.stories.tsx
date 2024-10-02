import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileItem from './UserProfileItem';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';
import ProfileOrdersSvg from '@/shared/assets/icons/profile-orders.svg';

export default {
    title: 'features/UserProfile/UserProfileItem',
    component: UserProfileItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StyledDecorator({
            margin: 20,
        }),
    ],
} as ComponentMeta<typeof UserProfileItem>;

const Template: ComponentStory<typeof UserProfileItem> = (args) => (
    <UserProfileItem {...args} />
);

export const Orders = Template.bind({});
Orders.args = {
    name: 'my-orders',
    title: 'Заказы',
    route: '/my/orders',
    Svg: ProfileOrdersSvg,
};
