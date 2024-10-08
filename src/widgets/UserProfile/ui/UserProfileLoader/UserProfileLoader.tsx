import classNames from '@/shared/lib/helpers/classNames';
import cls from './UserProfileLoader.module.scss';

export interface UserProfileLoaderProps {
    className?: string;
}

export const UserProfileLoader = (props: UserProfileLoaderProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.UserProfileLoader, {}, [className])}>
            <div />
            <div>
                <div className={cls.content} />
            </div>
        </div>
    );
};
