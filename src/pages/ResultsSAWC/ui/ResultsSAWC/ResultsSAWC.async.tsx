import { FC, lazy } from 'react';
import type { ResultsSAWCProps } from './ResultsSAWC';

export const ResultsSAWCAsync = lazy<FC<ResultsSAWCProps>>(() => import('./ResultsSAWC'));
