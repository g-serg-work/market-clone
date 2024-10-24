import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender';
import AppRouter from './AppRouter';
import { getRouteMain, getRouteOrders } from '@/shared/const/router';

describe('app/router/AppRouter', () => {
    test('The page should be render', async () => {
        componentRender(<AppRouter />, {
            route: getRouteMain(),
        });

        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('The page is not found', async () => {
        componentRender(<AppRouter />, {
            route: '/unknown',
        });

        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('Redirect of an unauthorized user on the RequireAuthPage', async () => {
        componentRender(<AppRouter />, {
            route: getRouteOrders(),
            initialState: {
                user: { _inited: true },
            },
        });

        const page = await screen.findByTestId('RequireAuthPage');
        expect(page).toBeInTheDocument();
    });

    test('Access to a closed page for an authorized user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteOrders(),
            initialState: {
                user: { _inited: true, userData: {} },
            },
        });

        const page = await screen.findByTestId('OrdersPage');
        expect(page).toBeInTheDocument();
    });
});
