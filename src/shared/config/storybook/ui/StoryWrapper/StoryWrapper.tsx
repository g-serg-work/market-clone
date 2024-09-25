import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

export interface StoryWrapperProps {
    children: ReactNode;
    className?: string;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    backgroundColor?: string;
}

export const StoryWrapper = memo((props: StoryWrapperProps) => {
    const {
        children,
        className,
        maxWidth,
        minHeight,
        maxHeight,
        backgroundColor,
    } = props;

    const style = {
        maxWidth: maxWidth,
        minHeight: minHeight,
        maxHeight: maxHeight,
        backgroundColor: backgroundColor,
    };

    return (
        <div className={classNames('', {}, [className])} style={style}>
            {children}
        </div>
    );
});
