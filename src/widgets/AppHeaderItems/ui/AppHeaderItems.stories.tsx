import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppHeaderItems } from './AppHeaderItems';

export default {
    title: 'widgets/AppHeaderItems',
    component: AppHeaderItems,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppHeaderItems>;

const Template: ComponentStory<typeof AppHeaderItems> = (args) => (
    <AppHeaderItems {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
