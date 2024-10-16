import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Footer } from './Footer';
import RouterDecorator from '@/shared/config/storybook/RouterDecorator';
import StoreDecorator from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/Page/Footer',
    component: Footer,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator, StoreDecorator({})],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const WithUserEmail = Template.bind({});
WithUserEmail.args = {};
WithUserEmail.decorators = [
    StoreDecorator({
        user: {
            userData: { userEmail: 'test@market-clone.ru' },
        },
    }),
];
