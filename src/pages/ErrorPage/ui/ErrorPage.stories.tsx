import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorPage } from './ErrorPage';
import { StoryWrapper } from '@/shared/config/storybook';

export default {
    title: 'pages/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
    <StoryWrapper maxHeight={300}>
        <ErrorPage {...args} />
    </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {};
