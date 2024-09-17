import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinkBestSellers, LinkBestSellersProps } from './LinkBestSellers';

const props: LinkBestSellersProps = { href: 'about:blank' };

export default {
    title: 'shared/LinkBestSellers',
    component: LinkBestSellers,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LinkBestSellers>;

const Template: ComponentStory<typeof LinkBestSellers> = (args) => (
    <div style={{ backgroundColor: '#b474dd' }}>
        <LinkBestSellers {...args} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = props;
