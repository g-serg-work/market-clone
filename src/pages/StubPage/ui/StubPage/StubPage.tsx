import { useLocation , Link } from 'react-router-dom';
import { Page } from '@/widgets/Page';

const uriList = ['/catalog/kids-dep', '/my/orders'].map((uri, idx) => (
    <li key={idx}>
        <Link to={uri} style={{ textDecoration: 'underline' }}>
            {uri}
        </Link>
    </li>
));

export const StubPage = () => {
    const location = useLocation();

    return (
        <Page data-testid="StubPage">
            <div>Stub for</div>
            <h1
                style={{
                    fontSize: 'large',
                    marginLeft: '5rem',
                }}
            >
                {location.pathname}
            </h1>
            <div>Uri with data</div>
            <ul
                style={{
                    marginLeft: '5rem',
                }}
            >
                {uriList}
            </ul>
        </Page>
    );
};
