import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CategoryMenuItem } from './CategoryMenuItem';
import { HeaderTabRoutes } from '@/shared/const/headertabroutes';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';

export default {
    title: 'widgets/CategoryMenu/CategoryMenuItem',
    component: CategoryMenuItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof CategoryMenuItem>;

const Template: ComponentStory<typeof CategoryMenuItem> = (args) => (
    <CategoryMenuItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    route: HeaderTabRoutes.KIDS_DEP,
};
