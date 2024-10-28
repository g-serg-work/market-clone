import { RecommendationTabs } from '@/features/RecommendationTabs';
import { Page } from '@/widgets/Page';

export const MainPage = () => {
    return (
        <Page data-testid="MainPage">
            <RecommendationTabs />
            MainPage
        </Page>
    );
};
