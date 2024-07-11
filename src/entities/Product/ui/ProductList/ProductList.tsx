import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ProductList.module.scss';

interface ProductListProps {
   className?: string;
}

export const ProductList = memo((props: ProductListProps) => {
   const { className } = props;

   return <div className={classNames(cls.ProductList, {}, [className])}></div>;
});
