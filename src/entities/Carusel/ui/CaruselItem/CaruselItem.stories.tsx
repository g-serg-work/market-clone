import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CaruselItem } from './CaruselItem';

export default {
    title: 'entities/Carusel/CaruselItem',
    component: CaruselItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CaruselItem>;

const Template: ComponentStory<typeof CaruselItem> = (args) => {
    return (
        <div style={{ maxWidth: 500 }}>
            <CaruselItem {...args} />
        </div>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    title: 'carusel-item',
    img: '',
    imgTest: '/tests/assets/carusel-item.webp',
    href: 'about:blank',
};
