import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PriceComponent.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { FontColor, FontSize, FontWeight, Text } from '@/shared/ui/Text';
import { Product } from '../../model/types/products';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';

interface PriceComponentProps {
   className?: string;
   product: Product;
}

export const PriceComponent = memo((props: PriceComponentProps) => {
   const { className, product } = props;

   const formatPrice = (value: string) => {
      const price = value.split('');
      const index = price.length === 5 ? 2 : 3;
      price.splice(index, 0, ' ').join('');
      return price;
   };

   return (
      <div className={classNames(cls.PriceComponent, {}, [className])}>
         <HStack
            justify={FlexJustify.BETWEEN}
            align={FlexAlign.CENTER}
            className={cls.priceContainer}
         >
            {String(product.priceDiscount) !== 'Под заказ' ? (
               <HStack gap={20}>
                  <Text
                     fontSize={FontSize.SIZE_19}
                     fontColor={FontColor.LIGHT_GREY}
                     className={cls.price}
                  >
                     {formatPrice(String(product.price))}&#8381;
                  </Text>
                  <Text fontSize={FontSize.SIZE_19} fontColor={FontColor.RED}>
                     {formatPrice(String(product.priceDiscount))}&#8381;
                  </Text>
               </HStack>
            ) : (
               <Text fontSize={FontSize.SIZE_19} fontColor={FontColor.RED}>
                  {formatPrice(String(product.priceDiscount))} <br />
                  <span className={cls.orderText}>
                     Изготовление по вашим размерам
                  </span>
               </Text>
            )}
            <Button
               width={124}
               height={40}
               fontSize={FontSize.SIZE_15}
               fontWeight={FontWeight.TEXT_400}
               fontColor={FontColor.WHITE}
               variant={ButtonVariant.FILLED}
               bgColor={ButtonBgColor.GREEN}
               className={classNames('', {}, [cls.buttonSelect])}
            >
               Заказать
            </Button>
         </HStack>
      </div>
   );
});
