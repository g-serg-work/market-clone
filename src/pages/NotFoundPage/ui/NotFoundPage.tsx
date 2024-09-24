import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import Svg from '@/shared/assets/icons/404.svg';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div
            data-testid="NotFoundPage"
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            <Svg />
            <header className={cls.header}>Тут ничего нет</header>
            <section className={cls.section}>
                <div>
                    Попробуйте вернуться назад или поищите что-нибудь другое.
                </div>
                <div>Код ошибки: 404</div>
            </section>

            <div className={cls.linkWrapper}>
                <a href="/">
                    <span>На главную</span>
                </a>
            </div>
        </div>
    );
};
