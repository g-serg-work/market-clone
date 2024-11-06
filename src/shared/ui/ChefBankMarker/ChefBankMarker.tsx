import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ChefBankMarker.module.scss';

export type ChefBankProps = {
    title: string;
    svg: React.ReactNode;
    textClassName: string;
};

export interface ChefBankMarkerProps extends ChefBankProps {
    className?: string;
}

export const ChefBankMarker = memo((props: ChefBankMarkerProps) => {
    const { className, title, svg, textClassName } = props;

    return (
        <div
            className={classNames(cls.ChefBankMarker, {}, [
                'ds-textLine',
                'ds-textLine_gap_2',
                className,
            ])}
        >
            <div className="ds-textLine__iconWrapper">{svg}</div>
            <span className={classNames(cls.text, {}, [textClassName])}>
                {title}
            </span>
        </div>
    );
});
