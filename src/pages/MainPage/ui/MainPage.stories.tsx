import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainPage from './MainPage';
import { StoreDecorator, RouterDecorator } from '@/shared/config/storybook';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [StoreDecorator({}), RouterDecorator],
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

export const Primary = Template.bind({});
Primary.args = {};
