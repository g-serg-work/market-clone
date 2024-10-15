import cls from '../LoginForm.module.scss';

import QrIconSvg from '../../assets/icons/qr-icon.svg';
import AllSocialSvg from '../../assets/icons/all-social-icon.svg';

export const AllSocialBlock = () => (
    <div className={cls.authSocialBlock}>
        <div className={cls.authSocialBlockSingleButtons}>
            <div className={cls.authSocialBlockSingleProviderButton}>
                <button
                    data-t="button:pseudo"
                    data-type="qr"
                    type="button"
                    className={cls.authSocialBlockSingleButton}
                    autoComplete="off"
                >
                    <span className={cls.buttonText}>
                        <div className={cls.authSocialBlockSingleButtonContent}>
                            <QrIconSvg
                                className={cls.authSocialBlockSingleButtonIcon}
                            />
                            <span>QR-код</span>
                        </div>
                    </span>
                </button>
            </div>
            <div className={cls.authSocialBlockSingleProviderButton}>
                <button
                    data-t="button:pseudo"
                    data-type="all"
                    type="button"
                    className={cls.authSocialBlockSingleButton}
                    autoComplete="off"
                >
                    <span className={cls.buttonText}>
                        <div className={cls.authSocialBlockSingleButtonContent}>
                            <AllSocialSvg
                                className={cls.authSocialBlockSingleButtonIcon}
                            />
                            <span>Ещё</span>
                        </div>
                    </span>
                </button>
            </div>
        </div>
    </div>
);
