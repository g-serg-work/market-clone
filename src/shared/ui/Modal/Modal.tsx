import { CSSProperties, MouseEvent, ReactNode, useCallback } from 'react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';
import { useModal, useTheme } from '@/shared/lib/hooks';
import classNames, { Mods } from '@/shared/lib/helpers/classNames';
import { ModalTabIndexInitial } from './ModalTabIndexInitial';

export interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

export interface ModalOverlayProps {
    className?: string;
    children?: ReactNode;
}

export interface ModalContentProps {
    className?: string;
    children?: ReactNode;
    style?: CSSProperties;
}

const ANIMATION_DELAY = 180;

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, lazy } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const { theme } = useTheme();

    const onClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            const target = e.target as HTMLDivElement;
            if (target.dataset?.modalRole === 'close-on-click') {
                close();
            }
        },
        [close],
    );

    if (lazy && !isMounted) {
        return null;
    }

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div
                className={classNames('', mods, [className, theme])}
                onClick={onClick}
            >
                {children}
            </div>
        </Portal>
    );
};

Modal.Overlay = function ModalOverlay(props: ModalOverlayProps) {
    const { className, children } = props;

    return (
        <div
            className={classNames('', {}, [className])}
            data-modal-role="close-on-click"
        >
            {children}
        </div>
    );
};

Modal.Content = function ModalContent(props: ModalContentProps) {
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
