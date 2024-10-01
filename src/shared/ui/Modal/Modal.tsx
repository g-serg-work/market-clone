import { MouseEvent, ReactNode, useCallback } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';
import { ModalTabIndexInitial } from './ModalTabIndexInitial';
import { useModal, useTheme } from '@/shared/lib/hooks';

export interface ModalProps {
    className?: string;
    overlayClassName: string;
    contentClassName: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 180;

export const Modal = (props: ModalProps) => {
    const {
        className,
        overlayClassName,
        contentClassName,
        children: content,
        isOpen,
        onClose,
        lazy,
    } = props;

    const { close, isClosing, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen,
    });

    const { theme } = useTheme();

    const onContentClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if (target.dataset?.modalRole === 'close-node') {
            close();
        }
    }, []);

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal element={document.getElementById('app') ?? document.body}>
            <div className={classNames('', mods, [className, theme])}>
                <div className={overlayClassName} onClick={onClose} />
                <div className={contentClassName}>
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
