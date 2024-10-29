import { RecommendationTabs } from '@/entities/RecommendationTabs';
import { Page } from '@/widgets/Page';

export const MainPage = () => {
    return (
        <Page data-testid="MainPage">
            <RecommendationTabs />
            MainPage
        </Page>
    );
};
