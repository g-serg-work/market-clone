import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => (
    <div style={{ minHeight: 300 }}>
        <Page {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
