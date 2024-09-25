import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CaruselItem } from './CaruselItem';
import { RouterDecorator, StoryWrapper } from '@/shared/config/storybook';

export default {
    title: 'entities/Carusel/CaruselItem',
    component: CaruselItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [RouterDecorator],
} as ComponentMeta<typeof CaruselItem>;

const Template: ComponentStory<typeof CaruselItem> = (args) => (
    <StoryWrapper maxWidth={500}>
        <CaruselItem {...args} />
    </StoryWrapper>
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'carusel-item',
    img: '',
    imgTest: '/tests/assets/carusel-item.webp',
    href: 'about:blank',
};
