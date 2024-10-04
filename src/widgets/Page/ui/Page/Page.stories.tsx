import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';
import { RouterDecorator, StoreDecorator } from '@/shared/config/storybook';
import StyledDecorator from '@/shared/config/storybook/StyledDecorator';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        StoreDecorator({}),
        RouterDecorator,
        StyledDecorator({ minHeight: 300 }),
    ],
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
