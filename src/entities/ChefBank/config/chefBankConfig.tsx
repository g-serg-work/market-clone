import { ChefBankNames } from '../model/types/chefBank';
import { ChefBankProps } from '@/shared/ui/ChefBankMarker';
import AlfaSvg from '@/shared/assets/icons/chef-bank/alfa.svg';
import YaPaySvg from '@/shared/assets/icons/chef-bank/ya-pay.svg';

export const chefBankConfig: Record<ChefBankNames, ChefBankProps> = {
    [ChefBankNames.ALFA]: {
        title: 'Альфа',
        svg: <AlfaSvg />,
        textClassName: 'ds-text_color_text-secondary',
    },
    [ChefBankNames.YA_PAY]: {
        title: 'Пэй',
        svg: <YaPaySvg />,
        textClassName: 'ds-text_color_price-term',
    },
};
