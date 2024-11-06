import { memo } from 'react';
import { ChefBankMarker } from '@/shared/ui/ChefBankMarker';
import { ChefBankNames } from '../model/types/chefBank';
import { chefBankConfig } from '../config/chefBankConfig';

export interface ChefBankByNameProps {
    name: ChefBankNames;
}

export const ChefBankByName = memo((props: ChefBankByNameProps) => {
    const { name } = props;

    const conf = chefBankConfig[name];
    return <ChefBankMarker {...conf} />;
});
