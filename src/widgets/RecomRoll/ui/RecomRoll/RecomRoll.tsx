import { memo, useCallback, useEffect, useState } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import { RecomRollLoader } from '../RecomRollLoader/RecomRollLoader';
import {
    elementOnScreenChannel,
    elementOnChannelEvent,
} from '@/shared/eventsChannels/onScreenEventsChannel';
import { useBool } from '@/shared/lib/hooks/useBool';
import { RecomRollLayout } from './ui/RecomRollLayout/RecomRollLayout';
import { RecomRollBlock } from '../RecomRollBlock/RecomRollBlock';
import { RecomRollTypes, RecomRollRow } from '@/entities/RecomRoll';
import { ApiErrorType, ApiError } from '@/shared/ui/ApiError';
import cls from './RecomRoll.module.scss';

export interface RecomRollProps {
    className?: string;
    type: RecomRollTypes;
}

export const RecomRoll = memo((props: RecomRollProps) => {
    const { className, type } = props;

    const [rows, setRows] = useState<RecomRollRow[]>([]);
    const [error, setError] = useState<ApiErrorType>(undefined);

    const [needLoad, setNeedLoad] = useBool(false);
    const [hasNext, setHasNext] = useBool(true);
    const [isFirstLoad, setIsFirstLoad] = useBool(true);

    useEffect(() => {
        return elementOnScreenChannel.on(
            elementOnChannelEvent.footerOnScreen,
            (onScreen) => {
                if (onScreen && !isFirstLoad && hasNext) setNeedLoad.on();
            },
        );
    }, [setNeedLoad, isFirstLoad, hasNext]);

    const onLoad = useCallback(
        (row: RecomRollRow | undefined) => {
            setNeedLoad.off();
            setIsFirstLoad.off();
            setError(undefined);

            if (row) {
                setHasNext.set(row.hasNext);
                setRows((state) => state.concat([row]));
            }
        },
        [setRows, setNeedLoad, setIsFirstLoad, setHasNext, setError],
    );

    const onError = useCallback(
        (error: ApiErrorType) => {
            setNeedLoad.off();
            setIsFirstLoad.off();
            setError(error);
        },
        [setNeedLoad, setIsFirstLoad],
    );

    const reloadPage = useCallback(() => {
        setError(undefined);
        setNeedLoad.on();
    }, [setError, setNeedLoad]);

    return (
        <RecomRollLayout>
            <div
                data-zone-name="RecommendationRoll"
                className={classNames(cls.RecomRoll, {}, [className])}
            >
                <div
                    className={cls.wrapper}
                    data-apiary-widget-name="@search/ServerLayoutRenderer"
                >
                    <div
                        data-apiary-widget-name="@yandex-market/LazyLoader-market"
                        className={cls.container}
                    >
                        {rows.map((row, idx) => (
                            <RecomRollBlock key={idx} row={row} />
                        ))}
                        {(isFirstLoad || needLoad) && !error && (
                            <RecomRollLoader
                                type={type}
                                onLoad={onLoad}
                                onError={onError}
                                offset={rows.length}
                                showSkeleton={!isFirstLoad}
                            />
                        )}
                        {error && (
                            <>
                                <ApiError error={error} />
                                <button type="button" onClick={reloadPage}>
                                    Reload
                                </button>
                            </>
                        )}
                        {isFirstLoad && <div className="footerHide" />}
                    </div>
                </div>
            </div>
        </RecomRollLayout>
    );
});
