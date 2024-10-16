import cls from './Footer.GeneratedQrCode.module.scss';
import QrCodeSvg from '../assets/icons/qr-code.svg';

export const GeneratedQrCode = () => (
    <div
        data-apiary-widget-id="/footer/appPromoLoader/cmsDistributionWidget/0/135167782-DistributionFooterDesktop/qrCode"
        data-apiary-widget-name="@marketfront/GeneratedQrCode"
    >
        <div className={cls.flex}>
            <div className={cls.wrapper}>
                <div className={cls.imageWrapper}>
                    <QrCodeSvg width="100" height="100" data-auto="qrCodePicture" />
                </div>
                <span className={cls.title} data-auto="text">
                    <div>
                        Наведите камеру
                        <br />
                        на QR-код, чтобы
                        <br />
                        скачать
                    </div>
                </span>
            </div>
        </div>
    </div>
);
