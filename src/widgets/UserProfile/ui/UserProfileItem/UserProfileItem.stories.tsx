import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserProfileItem, { UserProfileItemProps } from './UserProfileItem';
import ProfileOrdersSvg from '../../assets/icons/orders.svg';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/UserProfile/UserProfileItem',
    component: UserProfileItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof UserProfileItem>;

const Template: ComponentStory<typeof UserProfileItem> = (args) => (
    <UserProfileItem {...args} />
);

const item: UserProfileItemProps = {
    name: 'item',
    title: 'Item',
    route: '/item',
    Svg: ProfileOrdersSvg,
};

export const Primary = Template.bind({});
Primary.args = item;

export const WithCount = Template.bind({});
WithCount.args = { ...item, count: 10 };

export const WithFocus = Template.bind({});
WithFocus.args = { ...item, autoFocus: true };
