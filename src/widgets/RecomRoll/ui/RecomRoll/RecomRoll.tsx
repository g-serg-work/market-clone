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
import cls from './RecomRoll.module.scss';

export interface RecomRollProps {
    className?: string;
    type: RecomRollTypes;
}

export const RecomRoll = memo((props: RecomRollProps) => {
    const { className, type } = props;

    const [rows, setRows] = useState<RecomRollRow[]>([]);
    const [needLoad, setNeedLoad] = useBool();
    const isFirstLoad = rows.length === 0;

    useEffect(() => {
        return elementOnScreenChannel.on(
            elementOnChannelEvent.footerOnScreen,
            (onScreen) => {
                if (onScreen && !isFirstLoad) setNeedLoad.on();
            },
        );
    }, [setNeedLoad, isFirstLoad]);

    const onLoad = useCallback(
        (rows: RecomRollRow[]) => {
            setNeedLoad.off();
            setRows((state) => state.concat(rows));
        },
        [setRows, setNeedLoad],
    );

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
                        {(isFirstLoad || needLoad) && (
                            <RecomRollLoader
                                type={type}
                                onLoad={onLoad}
                                offset={rows.length}
                                isFirstLoad={isFirstLoad}
                            />
                        )}
                        {isFirstLoad && <div className="footerHide" />}
                    </div>
                </div>
            </div>
        </RecomRollLayout>
    );
});
