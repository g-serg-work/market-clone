import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Delimiter } from './Delimiter';
import { StoryWrapper } from '@/shared/config/storybook';

export default {
    title: 'shared/Delimiter',
    component: Delimiter,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Delimiter>;

const Template: ComponentStory<typeof Delimiter> = (args) => (
    <StoryWrapper backgroundColor={'#1f90ae'}>
        <Delimiter {...args} />
    </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
    height: 20,
};
