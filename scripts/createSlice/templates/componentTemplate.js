const interfaceConst = 'interface';

// import { useTranslation } from 'react-i18next';
// const { t } = useTranslation();

module.exports = (componentName) => `import { memo } from 'react';
import classNames from '@/shared/lib/helpers/classNames';
import cls from './${componentName}.module.scss';

export ${interfaceConst} ${componentName}Props {
    className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
    const { className } = props;
    
    return (
        <div className={classNames(cls.${componentName}, {}, [className])}>
        </div>
    );
});`;
