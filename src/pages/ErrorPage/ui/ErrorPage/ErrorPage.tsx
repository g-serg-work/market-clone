import classNames from '@/shared/lib/helpers/classNames';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>An unexpected error occurred</p>
            <button type="button" onClick={reloadPage}>
                Reload page
            </button>
        </div>
    );
};
