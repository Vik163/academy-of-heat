import { FC, lazy } from 'react';
import type { MontageCaissonPageProps } from './MontageCaissonPage';

export const MontageCaissonPageAsync = lazy<FC<MontageCaissonPageProps>>(
   () => import('./MontageCaissonPage'),
);
