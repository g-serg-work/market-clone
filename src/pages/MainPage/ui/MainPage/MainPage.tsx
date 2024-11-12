import { useSelector } from 'react-redux';
import { Page } from '@/widgets/Page';
import { getUserData } from '@/entities/User';
import { RecommendationTabs } from '@/entities/RecommendationTabs';
import classNames from '@/shared/lib/helpers/classNames';
import { useBool } from '@/shared/lib/hooks/useBool';
import { RecomRoll } from '@/widgets/RecomRoll';
import cls from './MainPage.module.scss';
import { recomRollTypeGet, RecomRollTypes } from '@/entities/RecomRoll';

export interface MainPageProps {
    className?: string;
    isSale?: boolean;
    isLogged?: boolean;
}

export const MainPage = (props: MainPageProps) => {
    const { className, isSale: isSaleInit, isLogged: isLoggedInit } = props;

    const [isSale, setIsSale] = useBool(isSaleInit);
    const userData = useSelector(getUserData);

    const isLogged = isLoggedInit || !!userData;

    const type = recomRollTypeGet(isSale, isLogged);

    return (
        <Page
            data-apiary-widget-name="@card/RecommendationRollTabsV2"
            data-testid="MainPage"
            className={classNames(cls.MainPage, {}, [className])}
        >
            <div className={cls.wrapper}>
                <div className={cls.container}>
                    <div className={cls.tabsWrapper}>
                        <RecommendationTabs
                            isSale={isSale}
                            toggle={setIsSale.toggle}
                        />
                        {type === RecomRollTypes.GUEST && (
                            <RecomRoll type={type} />
                        )}
                        {type === RecomRollTypes.FOR_YOU && (
                            <RecomRoll type={type} />
                        )}
                        {type === RecomRollTypes.SALE && (
                            <RecomRoll type={type} />
                        )}
                    </div>
                </div>
            </div>
        </Page>
    );
};
