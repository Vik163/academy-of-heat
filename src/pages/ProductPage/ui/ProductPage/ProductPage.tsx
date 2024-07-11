import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ProductPage.module.scss';
import { Page } from '@/widgets/Page';
import { ProductItem } from '@/entities/Product';

export interface ProductPageProps {
   className?: string;
}

const ProductPage = memo((props: ProductPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.ProductPage, {}, [className])}>
         <ProductItem />
      </Page>
   );
});

export default ProductPage;
