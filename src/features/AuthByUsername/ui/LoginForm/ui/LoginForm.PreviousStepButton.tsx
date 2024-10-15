import { memo, MouseEventHandler, useCallback } from 'react';
import cls from '../LoginForm.module.scss';
import BackSvg from '../../assets/icons/back.svg';

interface PreviousStepButtonProps {
    onClose?: () => void;
}

export const PreviousStepButton = memo((props: PreviousStepButtonProps) => {
    const { onClose } = props;

    const onClick: MouseEventHandler<HTMLAnchorElement> = useCallback(
        (e) => {
            e.preventDefault();
            onClose?.();
        },
        [onClose],
    );

    return (
        /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
        <a
            className={cls.previousStepButton}
            aria-label="Назад"
            onClick={onClick}
        >
            <span data-link="http://market.yandex.ru/" />
            <BackSvg />
        </a>
    );
});
