import { FC, lazy } from 'react';
import type { ArragementWellsPageProps } from './ArragementWellsPage';

export const ArragementWellsPageAsync = lazy<FC<ArragementWellsPageProps>>(() => import('./ArragementWellsPage'));
