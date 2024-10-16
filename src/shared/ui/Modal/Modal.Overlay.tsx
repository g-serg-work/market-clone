import { ReactNode } from 'react';
import classNames from '@/shared/lib/helpers/classNames';

export interface ModalOverlayProps {
    className?: string;
    children?: ReactNode;
}

export const ModalOverlay = (props: ModalOverlayProps) => {
    const { className, children } = props;

    return (
        <div className={classNames('', {}, [className])} data-modal-role="close-on-click">
            {children}
        </div>
    );
};
