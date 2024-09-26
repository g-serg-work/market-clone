import { memo, ReactNode } from 'react';
import classNames from '@/shared/lib/classNames';

export interface StoryWrapperProps {
    children: ReactNode;
    className?: string;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    backgroundColor?: string;
}

/**
 * TODO: replace on WrapperDecorator(style) and use in decorators: []
 * @deprecated
 */
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
