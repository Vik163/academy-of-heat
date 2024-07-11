import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ParametersComponent.module.scss';

import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { Select } from '@/shared/ui/Select';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Product } from '../../model/types/products';

interface ParametersComponentProps {
   className?: string;
   onChange: (value: string) => void;
   product: Product;
   productsViews: string[];
   productViewPath: string;
}

export const ParametersComponent = memo((props: ParametersComponentProps) => {
   const { className, onChange, product, productsViews, productViewPath } =
      props;
   const [selectedValue, setSelectedValue] = useState<string>();

   const viewProduct = () => {
      switch (productViewPath) {
         case 'caissons':
            return 'размер кессона';
         case 'cellcaissons':
            return 'размер погреба-кессона';
         case 'cellars':
            return 'размер погреба';
         case 'capacities':
            return 'объем емкости';
         case 'sps':
            return 'размер КНС';

         default:
            return 'размер кессона';
      }
   };

   const onChangeSelect = useCallback((value: string) => {
      setSelectedValue(value);
      onChange(value);
   }, []);

   return (
      <div className={classNames(cls.ParametersComponent, {}, [className])}>
         <VStack
            className={cls.selectContainer}
            align={FlexAlign.START}
            justify={FlexJustify.BETWEEN}
         >
            <span className={cls.selectTitle}>Выберите {viewProduct()}</span>
            <Select
               className={cls.select}
               placeholder={product?.size}
               name='products'
               options={productsViews}
               heightOptionContainer={productsViews.length * 18 + 4}
               scrollRadius={0}
               onChange={onChangeSelect}
               selected={selectedValue}
            />
         </VStack>
         {product?.diaCoupling && (
            <HStack gap={40}>
               <VStack
                  className={cls.parameterContainer}
                  align={FlexAlign.START}
                  justify={FlexJustify.BETWEEN}
               >
                  <span className={cls.parameterTitle}>
                     Диаметр обсадной трубы
                  </span>
                  <span className={cls.parameter}>{product?.diaPipe}</span>
               </VStack>

               <VStack
                  className={classNames(cls.parameterContainer, {}, [
                     cls.parameterCoupling,
                  ])}
                  align={FlexAlign.START}
                  justify={FlexJustify.BETWEEN}
               >
                  <span className={cls.parameterTitle}>
                     Диаметр муфты (min-max)
                  </span>
                  <span className={cls.parameter}>{product?.diaCoupling}</span>
               </VStack>
            </HStack>
         )}
         <HStack gap={40} className={cls.materialAndWight}>
            <VStack
               className={classNames(cls.parameterContainer, {}, [
                  cls.parameterMaterial,
               ])}
               align={FlexAlign.START}
               justify={FlexJustify.BETWEEN}
            >
               <span className={cls.parameterTitle}>Материал</span>
               <span className={cls.parameter}>Монолитный полипропилен</span>
            </VStack>

            {product.weight && (
               <VStack
                  className={classNames(cls.parameterContainer, {}, [
                     cls.parameterWeight,
                  ])}
                  align={FlexAlign.START}
                  justify={FlexJustify.BETWEEN}
               >
                  <span className={cls.parameterTitle}>Вес</span>
                  <span className={cls.parameter}>{product?.weight}</span>
               </VStack>
            )}
         </HStack>
      </div>
   );
});
