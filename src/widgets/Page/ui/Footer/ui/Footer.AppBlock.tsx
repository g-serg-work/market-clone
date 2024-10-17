import { ReactNode, memo } from 'react';
import cls from './Footer.AppBlock.module.scss';

export interface AppBlockProps {
    children: ReactNode;
}

export const AppBlock = memo(({ children }: AppBlockProps) => (
    <div className={cls.AppBlock}>
        <div className={cls.flex}>
            <span className={cls.title} data-auto="title">
                <div>
                    Заказывайте в новом приложении
                    <br />
                    Маркета и получайте бонусы
                </div>
            </span>
            <div className={cls.wrapper}>{children}</div>
        </div>
    </div>
));
