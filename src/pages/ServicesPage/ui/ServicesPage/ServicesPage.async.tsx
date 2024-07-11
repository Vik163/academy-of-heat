import { FC, lazy } from 'react';
import { ServicesPageProps } from './ServicesPage';

export const ServicesPageAsync = lazy<FC<ServicesPageProps>>(() => import('./ServicesPage'));
