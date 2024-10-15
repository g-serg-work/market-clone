import cls from '../LoginForm.module.scss';

export const Promo = () => (
    <div className={cls.yaIdPromoText}>
        Яндекс ID — ключ от всех сервисов{' '}
        <a href="https://id.yandex.ru/about" className={cls.yaIdPromoTextLink}>
            Узнать больше
        </a>
    </div>
);
