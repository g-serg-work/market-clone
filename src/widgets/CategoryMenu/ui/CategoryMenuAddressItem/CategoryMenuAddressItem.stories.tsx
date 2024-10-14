import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CategoryMenuAddressItem } from './CategoryMenuAddressItem';

export default {
    title: 'widgets/CategoryMenu/CategoryMenuAddressItem',
    component: CategoryMenuAddressItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CategoryMenuAddressItem>;

const Template: ComponentStory<typeof CategoryMenuAddressItem> = (args) => (
    <CategoryMenuAddressItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = { deliveryAddress: 'Delivery address' };
