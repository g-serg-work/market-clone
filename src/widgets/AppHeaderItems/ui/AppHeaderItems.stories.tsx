import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppHeaderItems } from './AppHeaderItems';
import { RouterDecorator } from '@/shared/config/storybook';

export default {
    title: 'widgets/AppHeaderItems',
    component: AppHeaderItems,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof AppHeaderItems>;

const Template: ComponentStory<typeof AppHeaderItems> = (args) => (
    <AppHeaderItems {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
