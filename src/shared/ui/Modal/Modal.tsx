import { CSSProperties, MouseEvent, ReactNode, useCallback } from 'react';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';
import { ModalTabIndexInitial } from './ModalTabIndexInitial';
import { useModal, useTheme } from '@/shared/lib/hooks';
import classNames, { Mods } from '@/shared/lib/helpers/classNames';

export interface ModalProps {
    className?: string;
    overlayClassName: string;
    contentClassName: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
    left?: number;
    top?: number;
    positionAt?: 'center' | 'lt';
    contentStyle?: CSSProperties;
}

const ANIMATION_DELAY = 180;

export const Modal = (props: ModalProps) => {
    const {
        className,
        overlayClassName,
        contentClassName,
        contentStyle = {},
        children: content,
        isOpen,
        onClose,
        lazy,
        left,
        top,
        positionAt = 'center',
    } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const { theme } = useTheme();

    const onContentClick = useCallback(
        (e: MouseEvent<HTMLDivElement>) => {
            const target = e.target as HTMLDivElement;
            if (target.dataset?.modalRole === 'close-node') {
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

    const posStyle: { left?: number; top?: number } = {};

    switch (positionAt) {
        case 'lt':
            posStyle.left = left;
            posStyle.top = top;
            break;
        default:
    }

    const calcStyle = { ...posStyle, ...contentStyle };

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div className={classNames('', mods, [className, theme])}>
                <div className={overlayClassName} onClick={onClose} />
                <div className={contentClassName} style={calcStyle}>
                    <ModalTabIndexInitial tabIndex={1} />
                    <div
                        data-modal-role="close-node"
                        className={cls.animation}
                        onClick={onContentClick}
                    >
                        {content}
                    </div>
                    <ModalTabIndexInitial tabIndex={0} />
                </div>
            </div>
        </Portal>
    );
};
