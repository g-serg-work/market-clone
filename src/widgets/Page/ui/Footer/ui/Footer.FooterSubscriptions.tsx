import {
    ChangeEvent,
    FormEventHandler,
    memo,
    useCallback,
    useState,
} from 'react';
import { Link } from 'react-router-dom';
import cls from './Footer.FooterSubscriptions.module.scss';
import SubscribeSvg from '../assets/icons/subscribe.svg';

export interface FooterSubscriptionsProps {
    userEmail?: string;
}

export const FooterSubscriptions = memo((props: FooterSubscriptionsProps) => {
    const { userEmail } = props;

    const [email, onEmailChange] = useState(userEmail);

    const onInput = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            onEmailChange(e.target.value);
        },
        [onEmailChange],
    );

    const onFormSubmit: FormEventHandler<HTMLFormElement> = useCallback(
        (event) => {
            event.preventDefault();
        },
        [],
    );

    return (
        <div
            data-apiary-widget-id="/footer/subscription"
            data-apiary-widget-name="@MarketNode/FooterSubscriptions"
        >
            <div className={cls.container} data-zone-name="footerSubscription">
                <div className={cls.wrapper}>
                    <div className={cls.content}>
                        <div className={cls.formWrapper}>
                            <form className={cls.form} onSubmit={onFormSubmit}>
                                <SubscribeSvg />
                                <div className={cls.title}>
                                    Будьте в курсе скидок на электронику, товары
                                    для детей и для дома
                                </div>
                                <div className={cls.mailBox}>
                                    <input
                                        placeholder="Электронная почта"
                                        value={email}
                                        onChange={onInput}
                                    />
                                </div>
                                <button className={cls.button} type="submit">
                                    Подписаться
                                </button>
                            </form>
                            <div className={cls.confidential}>
                                Нажимая «Подписаться», я соглашаюсь получать
                                рекламные&nbsp;и&nbsp;иные&nbsp;маркетинговые&nbsp;сообщения
                                от&nbsp;ООО&nbsp;«ЯНДЕКС» на&nbsp;условиях&nbsp;
                                <Link to="/legal/confidential">
                                    Политики&nbsp;конфиденциальности
                                </Link>
                                &nbsp; и&nbsp;
                                <Link to="/legal/market_termsofuse">
                                    Пользовательского&nbsp;соглашения
                                </Link>
                                .
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});
