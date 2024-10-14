import { Fragment } from 'react';
import { Banner } from '@/entities/Banner';
import { CaruselList } from '@/entities/Carusel';
import { CatalogId } from '@/entities/Catalog';
import { CategoryList } from '@/entities/Category';
import classNames from '@/shared/lib/helpers/classNames';
import { ApiError } from '@/shared/ui/ApiError';
import { Delimiter } from '@/shared/ui/Delimiter';
import { Page } from '@/widgets/Page';
import { useCatalogPage } from '../api/catalogPageApi';
import { CatalogPageProps } from './CatalogPage';
import cls from './CatalogPage.module.scss';

export const CatalogPageInner = (
    props: {
        catalogId: CatalogId;
    } & CatalogPageProps,
) => {
    const { className, catalogId } = props;

    const {
        data: catalog,
        isLoading,
        isError,
        error,
    } = useCatalogPage({
        catalogId,
    });

    if (isLoading) {
        return null;
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
                <Banner
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
