import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecomRollSkeleton } from './RecomRollSkeleton';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'widgets/RecomRoll/RecomRollSkeleton',
    component: RecomRollSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StyledDecorator({ maxWidth: 1440 })],
} as ComponentMeta<typeof RecomRollSkeleton>;

const Template: ComponentStory<typeof RecomRollSkeleton> = (args) => (
    <RecomRollSkeleton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

export const WithError = Template.bind({});
WithError.args = { children: 'Error Message' };
