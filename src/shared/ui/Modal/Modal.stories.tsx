import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import { useState, useCallback } from 'react';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => {
    const { children } = args;
    const [isOpen, setIsOpen] = useState(true);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const onOpen = useCallback(() => {
        setIsOpen(true);
    }, []);

    return (
        <>
            <button type="button" onClick={onOpen}>
                Open
            </button>
            {isOpen && (
                <Modal isOpen={isOpen} onClose={onClose}>
                    {children}
                </Modal>
            )}
        </>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.\n ',
};
