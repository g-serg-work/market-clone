import { Button } from '@/shared/ui/Button';
import cls from './FavoriteCategoryClose.module.scss';
import Svg from '../../assets/icons/close.svg';
import classNames from '@/shared/lib/helpers/classNames';
import useAutoFocus from '@/shared/lib/hooks/useAutoFocus';

export interface FavoriteCategoryCloseProps {
    className?: string;
    onClose?: () => void;
    autoFocus?: boolean;
}

export const FavoriteCategoryClose = (props: FavoriteCategoryCloseProps) => {
    const { className, onClose, autoFocus } = props;
    const { autoFocusRef } = useAutoFocus<HTMLButtonElement>();

    return (
        <Button
            ref={autoFocus ? autoFocusRef : undefined}
            className={classNames(cls.FavoriteCategoryClose, {}, [className])}
            data-auto="close-popup"
            aria-label="Закрыть"
            onClick={onClose}
        >
            <Svg aria-hidden="true" />
        </Button>
    );
};
