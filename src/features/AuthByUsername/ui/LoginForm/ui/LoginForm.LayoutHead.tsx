import cls from '../LoginForm.module.scss';

export const LayoutHead = () => (
    <div className={cls.layoutHead}>
        <div data-t="title" className={cls.titleWithDescription}>
            <h1 className={cls.titleWithDescriptionTitle}>
                <span>Войдите с Яндекс ID</span>
            </h1>
        </div>
    </div>
);
