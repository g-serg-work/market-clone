import { MouseEvent, ReactNode, useCallback } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import cls from './Modal.module.scss';
import { Portal } from '../Portal';
import { ModalTabIndexInitial } from './ModalTabIndexInitial';

export interface ModalProps {
    className: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 180;

/**
 * Need use as
 *
 * [className] {
 *
 *  [data-modal-role='overlay'] { ...  }
 *
 *  [data-modal-role='content'] { ...  }
 *
 * }
 */
export const Modal = (props: ModalProps) => {
    const { className, children: content, isOpen, onClose, lazy } = props;

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
            <div className={classNames(className, mods, [theme])}>
                <div data-modal-role="overlay" onClick={onClose} />
                <div data-modal-role="content" className={cls.content}>
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
