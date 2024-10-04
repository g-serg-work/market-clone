import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ErrorPage } from './ErrorPage';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'pages/ErrorPage',
    component: ErrorPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StyledDecorator({ maxHeight: 300 })],
} as ComponentMeta<typeof ErrorPage>;

const Template: ComponentStory<typeof ErrorPage> = (args) => (
    <ErrorPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
