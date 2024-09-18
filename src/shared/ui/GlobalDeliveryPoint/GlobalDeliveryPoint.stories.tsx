import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
    GlobalDeliveryPoint,
    GlobalDeliveryPointProps,
} from './GlobalDeliveryPoint';

const props: GlobalDeliveryPointProps = {};

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
Primary.args = props;
