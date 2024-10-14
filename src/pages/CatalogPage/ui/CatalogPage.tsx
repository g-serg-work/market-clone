import { useParams } from 'react-router-dom';
import { CatalogId } from '@/entities/Catalog';
import { CatalogPageInner } from './CatalogPageInner';

export interface CatalogPageProps {
    className?: string;
}

export const CatalogPage = (props: Omit<CatalogPageProps, 'catalogId'>) => {
    const { catalogId } = useParams<{ catalogId: CatalogId }>();

    if (!catalogId) return null;

    return <CatalogPageInner catalogId={catalogId} {...props} />;
};
