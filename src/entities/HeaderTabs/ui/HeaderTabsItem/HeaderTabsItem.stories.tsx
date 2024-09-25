import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HeaderTabsItem } from './HeaderTabsItem';
import { HeaderTabRoutes } from '@/shared/const/headertabroutes';
import { RouterDecorator } from '@/shared/config/storybook';

export default {
    title: 'entities/HeaderTabs/HeaderTabsItem',
    component: HeaderTabsItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof HeaderTabsItem>;

const Template: ComponentStory<typeof HeaderTabsItem> = (args) => (
    <HeaderTabsItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    route: HeaderTabRoutes.KIDS_DEP,
};
