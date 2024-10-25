import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('The user is not authorized', () => {
        it('Transition to the main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('The transition opens the orders page', () => {
            cy.visit('/my/orders');
            cy.get(selectByTestId('RequireAuthPage')).should('exist');
        });
        it('The transition opens a not-existent route', () => {
            cy.visit('/unknown');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('The user is authorized', () => {
        beforeEach(() => {
            cy.logIn();
        });
        it('The transition opens the orders page', () => {
            cy.visit('/my/orders');
            cy.get(selectByTestId('OrdersPage')).should('exist');
        });
    });
});
