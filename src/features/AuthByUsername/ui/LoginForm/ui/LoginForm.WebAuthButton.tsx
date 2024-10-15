import cls from '../LoginForm.module.scss';

import FingerPrintSvg from '../../assets/icons/fingerprint-icon.svg';

export const WebAuthButton = () => (
    <div className={cls.passpWebAuthWrapper} style={{ display: 'block' }}>
        <button
            data-t="button:default:passp:web-auth-btn"
            id="passp:web-auth-btn"
            type="button"
            className={cls.passpWebAuthButton}
            autoComplete="off"
        >
            <span className={cls.buttonText}>
                <div className={cls.webAuthnAuthButtonContent}>
                    <FingerPrintSvg className={cls.webAuthAuthButtonIcon} />
                    <span>По лицу или отпечатку</span>
                </div>
            </span>
        </button>
    </div>
);
