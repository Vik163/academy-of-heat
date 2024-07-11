import { FC, lazy } from 'react';
import { CatalogPageProps } from './CatalogPage';

export const CatalogPageAsync = lazy<FC<CatalogPageProps>>(() => import('./CatalogPage'));
