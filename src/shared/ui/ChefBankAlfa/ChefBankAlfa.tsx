import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './ChefBankAlfa.module.scss';
import Svg from '@/shared/assets/icons/chef-bank-alfa.svg';

export interface ChefBankAlfaProps {
    className?: string;
}

export const ChefBankAlfa = memo((props: ChefBankAlfaProps) => {
    const { className } = props;

    return (
        <div
            className={classNames(cls.ChefBankAlfa, {}, [
                'ds-textLine',
                'ds-textLine_gap_2',
                className,
            ])}
        >
            <div className="ds-textLine__iconWrapper">
                <Svg />
            </div>
            <span className={cls.text}>Альфа</span>
        </div>
    );
});
