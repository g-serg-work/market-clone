import React, { ForwardedRef, forwardRef, useCallback } from 'react';
import callElementBoundingClientRect from '@/shared/lib/helpers/callElementBoundingClientRect';
import { onClickType } from '@/shared/eventChannels/appEvents';

interface ClickAbleProps
    extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
    children?: React.ReactNode;
    onClick?: onClickType;
}

const ClickAble = (
    props: ClickAbleProps,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const { children, onClick, ...otherProps } = props;

    // TODO: fix DRY with Button
    const onMouseClick: React.MouseEventHandler<HTMLDivElement> = useCallback(
        (e) => {
            onClick?.({
                source: 'mouse',
                elementBoundingClientRect: callElementBoundingClientRect(
                    e.currentTarget as HTMLElement,
                ),
            });
        },
        [onClick],
    );

    const onKeyUp: React.KeyboardEventHandler<HTMLDivElement> = useCallback(
        (e) => {
            const enterOrSpace =
                e.key === 'Enter' ||
                e.key === ' ' ||
                e.key === 'Spacebar' ||
                e.code === 'Enter' ||
                e.code === 'Space';

            if (enterOrSpace) {
                e.preventDefault();

                onClick?.({
                    source: 'keyboard',
                    elementBoundingClientRect: callElementBoundingClientRect(
                        e.currentTarget as HTMLElement,
                    ),
                });
            }
        },
        [onClick],
    );

    return (
        <div ref={ref} onClick={onMouseClick} onKeyUp={onKeyUp} {...otherProps}>
            {children}
        </div>
    );
};

export default forwardRef(ClickAble);
