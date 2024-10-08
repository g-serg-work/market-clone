import { memo, MutableRefObject, ReactNode, UIEvent, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getUIScrollByPath, uiActions } from '@/features/UI';
import { StateSchema } from '@/app/providers/StoreProvider';
import cls from './Page.module.scss';
import { TestProps } from '@/shared/types/tests';
import {
    useAppDispatch,
    useInfiniteScroll,
    useInitialEffect,
    useThrottle,
} from '@/shared/lib/hooks';
import classNames from '@/shared/lib/classNames';
import { Footer } from '../Footer/Footer';

interface PageProps extends TestProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const PAGE_DATA_ZONE_NAME = 'CmsPage';

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const scrollPosition = useSelector((state: StateSchema) =>
        getUIScrollByPath(state, pathname),
    );

    useInfiniteScroll({
        triggerRef,
        callback: onScrollEnd,
    });

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            uiActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    return (
        <div
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
            data-zone-name={PAGE_DATA_ZONE_NAME}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            <Footer />
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </div>
    );
});
