// eslint-disable-next-line feature-sliced-project/import-only-underlying
import '@/app/styles/index.scss';
import { Story } from '@storybook/react';

export const StyleDecorator = (story: () => Story) => story();
