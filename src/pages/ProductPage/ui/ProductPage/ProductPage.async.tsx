import { FC, lazy } from 'react';
import { ProductPageProps } from './ProductPage';

export const ProductPageAsync = lazy<FC<ProductPageProps>>(() => import('./ProductPage'));
