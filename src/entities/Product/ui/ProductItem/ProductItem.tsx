import { memo, useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ProductItem.module.scss';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Product } from '../../model/types/products';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { ParametersComponent } from '../ParametersComponent/ParametersComponent';
import { PriceComponent } from '../PriceComponent/PriceComponent';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { HorizontalScroll } from '@/features/HorizontalScroll/HorizontalScroll';
import { $api } from '@/shared/api/api';
import { Skeleton } from '@/shared/ui/Sceleton/Skeleton';

interface ProductItemProps {
   className?: string;
}

export const ProductItem = memo((props: ProductItemProps) => {
   const { className } = props;
   const { pathname } = useLocation();
   const [product, setProduct] = useState<Product>();
   const [products, setProducts] = useState<Product[]>();
   const [productsViews, setProductsViews] = useState<string[]>();
   const [isLoading, setIsLoading] = useState(false);
   const index = pathname.lastIndexOf('/') + 1;
   const productViewPath = pathname.slice(index);

   const getViewsProducts = (arr: Product[]) => {
      const views = arr.map((item) => item.size);
      return views;
   };

   useEffect(() => {
      setIsLoading(true);
      $api
         .get('/products', {
            params: {
               viewProduct: productViewPath,
            },
         })
         .then((data) => {
            if (data.data) {
               setProducts(data.data);
               setProduct(data.data[0]);
               setProductsViews(getViewsProducts(data.data));
               setIsLoading(false);
            }
         });
   }, [productViewPath]);

   const changeSelect = useCallback(
      (value: string) => {
         const selectProduct = products?.find((item) => item.size === value);
         setProduct(selectProduct);
      },
      [products],
   );

   const skeleton = (
      <HStack gap={30} className={cls.container}>
         <VStack gap={30}>
            <Skeleton border='8px' width={530} height={90} />
            <Skeleton border='8px' width={530} height={90} />
            <Skeleton border='8px' width={530} height={90} />
            <Skeleton border='8px' width={530} height={90} />
            <Skeleton border='8px' width={530} height={90} />
         </VStack>
         <VStack gap={30}>
            <Skeleton border='8px' width={350} height={450} />
            <Skeleton border='8px' width={350} height={90} />
         </VStack>
      </HStack>
   );

   return (
      <div className={classNames(cls.ProductItem, {}, [className])}>
         <Breadcrumb productName={product?.title} className={cls.crumbs} />
         {isLoading ? (
            skeleton
         ) : (
            <HStack className={cls.container}>
               <VStack className={cls.infoContainer} align={FlexAlign.START}>
                  <Text
                     title={HeaderTagType.H_3}
                     className={cls.titleProduct}
                     fontColor={FontColor.BLACK}
                     fontSize={FontSize.SIZE_34}
                     fontWeight={FontWeight.TEXT_500}
                  >
                     {product?.title}
                  </Text>
                  <Text
                     fontColor={FontColor.LIGHT_GREY}
                     fontSize={FontSize.SIZE_14}
                     fontWeight={FontWeight.TEXT_500}
                  >
                     {product?.model}
                  </Text>
                  {product && productsViews && (
                     <ParametersComponent
                        productViewPath={productViewPath}
                        onChange={changeSelect}
                        product={product}
                        productsViews={productsViews}
                     />
                  )}
                  {product && <PriceComponent product={product} />}
                  <Button
                     width={330}
                     height={53}
                     variant={ButtonVariant.FILLED}
                     bgColor={ButtonBgColor.YELLOW}
                     fontWeight={FontWeight.TEXT_400}
                     fontColor={FontColor.BUTTON}
                     className={cls.buttonAdvice}
                  >
                     Получить консультацию менеджера
                  </Button>
               </VStack>
               <VStack gap={20}>
                  <div className={cls.imageContainer}>
                     <img src={product?.image} alt={product?.title} className={cls.mainImage} />
                  </div>
                  {product && <HorizontalScroll elements={product?.imagesFeatures} />}
               </VStack>
            </HStack>
         )}
      </div>
   );
});
