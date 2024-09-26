import { useParams } from 'react-router-dom';
import classNames from '@/shared/lib/classNames';
import cls from './CatalogPage.module.scss';
import { Page } from '@/widgets/Page';
import { PageBanner } from '@/entities/PageBanner';
import { CaruselList } from '@/entities/Carusel';
import { CategoryList } from '@/entities/Category';
import { Delimiter } from '@/shared/ui/Delimiter';
import { Fragment } from 'react';
import { ApiError } from '@/shared/ui/ApiError';
import { CatalogId } from '@/entities/Catalog';
import { useCatalogPage } from '../api/catalogPageApi';

interface CatalogPageProps {
    className?: string;
}

const CatalogPage = ({ className }: CatalogPageProps) => {
    const { catalogId } = useParams<{ catalogId: CatalogId }>();

    if (!catalogId) return <div>Not valid catalogId</div>;

    const {
        data: catalog,
        isLoading,
        isError,
        error,
    } = useCatalogPage({
        catalogId,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <ApiError error={error} />;
    }

    if (!catalog) return <div>No data</div>;

    const bannersItems = catalog.banners.map((banner, idx) => {
        const { href, bgImg, headerImg, carusel } = banner;

        return (
            <Fragment key={idx}>
                {idx > 0 && <Delimiter height={20} />}
                <PageBanner
                    href={href}
                    bgImg={bgImg}
                    headerImg={headerImg}
                    body={<CaruselList items={carusel} />}
                />
            </Fragment>
        );
    });

    return (
        <Page
            data-testid="CatalogPage"
            className={classNames(cls.CatalogPage, {}, [className])}
        >
            <div className={cls.wrapper}>
                <div className={cls.itemsWrapper}>
                    <div className={cls.itemsWrapperInner}>
                        <div className={cls.snippetLine1}>
                            <CategoryList
                                items={catalog.categories.slice(0, 6)}
                            />
                        </div>
                        <div className={cls.snippetLine2}>
                            <CategoryList items={catalog.categories.slice(6)} />
                        </div>
                        {bannersItems}
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default CatalogPage;
