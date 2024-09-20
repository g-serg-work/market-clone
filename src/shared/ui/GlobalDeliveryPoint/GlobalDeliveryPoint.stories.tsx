import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GlobalDeliveryPoint } from './GlobalDeliveryPoint';

export default {
    title: 'shared/GlobalDeliveryPoint',
    component: GlobalDeliveryPoint,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof GlobalDeliveryPoint>;

const Template: ComponentStory<typeof GlobalDeliveryPoint> = (args) => (
    <GlobalDeliveryPoint {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
