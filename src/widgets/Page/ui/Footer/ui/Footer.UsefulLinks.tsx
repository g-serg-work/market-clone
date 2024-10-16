import cls from './Footer.UsefulLinks.module.scss';
import { linkInfoItemsCfg } from '../constant/linkInfoItemsCfg';

import VkSvg from '../assets/icons/vk-new.svg';
import CopyRightProjectSvg from '../assets/icons/copy-right-project.svg';

const linkInfoItems = linkInfoItemsCfg.map((group, idx) => (
    <div key={idx} className={cls.linkInfoItem}>
        <h3>{group.text}</h3>
        {group.items.map((item, idx2) => (
            <a key={idx2} href={item.href} target="_blank" rel="nofollow noopener noreferrer">
                {item.text}
            </a>
        ))}
    </div>
));

export const UsefulLinks = () => (
    <div className={cls.wrapper}>
        <div className={cls.links}>
            <div className={cls.linksInfo}>
                <h2 className="ds-visuallyHidden">Полезные ссылки</h2>
                {linkInfoItems}
            </div>
            <div className={cls.linkSocialWrapper}>
                <div className={cls.linkSocialContent}>
                    <div>
                        <h3>Мы в соцсетях</h3>
                        <a
                            rel="nofollow noopener noreferrer"
                            href="https://vk.com/yandex.market"
                            title="Вконтакте"
                            target="_blank"
                        >
                            {/* <span className={cls.linkSocialImg}></span> */}
                            <VkSvg />
                            <span className={cls.linkSocialTitle}>Вконтакте</span>
                            <span className="ds-visuallyHidden">Вконтакте</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={cls.copyRights}>
            <a className={cls.copyRightItem} href="https://radar.yandex.ru">
                Статистика
            </a>
            <a className={cls.copyRightItem} href="https://legal.yandex.ru/market_termsofuse/">
                Пользовательское соглашение
            </a>
            <div className={cls.copyRightContent}>
                <div className={cls.copyRightSign}>
                    ©&nbsp;2024&nbsp;&nbsp;ООО&nbsp;«
                    <a className={cls.Ft4FS} href="https://market.yandex.ru/">
                        ЯНДЕКС
                    </a>
                    »
                </div>
                <div className={cls.copyRightProject}>
                    <span>Проект компании</span>
                    <a
                        className={cls._3nAMs}
                        href="https://yandex.ru/all"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Яндекс"
                    >
                        <CopyRightProjectSvg fill="none" focusable="false" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);
