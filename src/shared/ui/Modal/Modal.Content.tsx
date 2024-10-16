import { CSSProperties, ReactNode } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './Modal.module.scss';
import { ModalTabIndexInitial } from './ModalTabIndexInitial';

export interface ModalContentProps {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

export const ModalContent = (props: ModalContentProps) => {
    const { className, children, style = {} } = props;

    return (
        <div className={classNames('', {}, [className])} style={style}>
            <ModalTabIndexInitial tabIndex={1} />
            <div data-modal-role="close-on-click" className={cls.animation}>
                {children}
            </div>
            <ModalTabIndexInitial tabIndex={0} />
        </div>
    );
};
