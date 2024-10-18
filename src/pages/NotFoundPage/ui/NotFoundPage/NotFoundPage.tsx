import classNames from '@/shared/lib/helpers/classNames';
import cls from './NotFoundPage.module.scss';
import Svg from '@/shared/assets/icons/404.svg';
import { Page } from '@/widgets/Page';

export interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <Page
            data-testid="NotFoundPage"
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            <div className={cls.wrapper}>
                <Svg />
                <header className={cls.header}>Тут ничего нет</header>
                <section className={cls.section}>
                    <div>
                        Попробуйте вернуться назад или поищите что-нибудь
                        другое.
                    </div>
                    <div>Код ошибки: 404</div>
                </section>

                <div className={cls.linkWrapper}>
                    <a href="/">
                        <span>На главную</span>
                    </a>
                </div>
            </div>
        </Page>
    );
};
