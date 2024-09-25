import { CatalogId, Catalog } from '@/entities/Catalog';
import { rtkApi } from '@/shared/api/rtkApi';

export interface GetCatalogArg {
    catalogId: CatalogId;
}

const catalogPageApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getCatalogPage: build.query<Catalog, GetCatalogArg>({
            query: ({ catalogId }) => ({
                url: `/catalog/${catalogId}`,
            }),
        }),
    }),
});

export const useCatalogPage = catalogPageApi.useGetCatalogPageQuery;
