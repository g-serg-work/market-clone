import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeaderMenuItemWishList } from './HeaderMenuItemWishList';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/Header/HeaderMenu/HeaderMenuItemWishList',
    component: HeaderMenuItemWishList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof HeaderMenuItemWishList>;

const Template: ComponentStory<typeof HeaderMenuItemWishList> = (args) => (
    <HeaderMenuItemWishList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithCount = Template.bind({});
WithCount.args = {
    count: 3,
};
