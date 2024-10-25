import { USER_LOCALSTORAGE_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';
import { selectByTestId } from '../../helpers/selectByTestId';

export const logIn = (userName: string = 'guest') => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/login',
            body: {
                userName,
            },
        })
        .then(({ body }) => {
            window.localStorage.setItem(USER_LOCALSTORAGE_KEY, body?.token);
            return body;
        });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            logIn(userName?: string): Chainable<User>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
