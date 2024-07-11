import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './NumInfoComponent.module.scss';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';

interface NumInfoComponentProps {
   className?: string;
}

export const NumInfoComponent = memo((props: NumInfoComponentProps) => {
   const { className } = props;

   return (
      <article className={classNames(cls.NumInfoComponent, {}, [className])}>
         <div className={cls.container}>
            <Text title={HeaderTagType.H_3} fontSize={FontSize.SIZE_36} fontWeight={FontWeight.TEXT_700}>
               ТМ «ЗЕМЛЯК» в цифрах
            </Text>
            <Text className={cls.subtitle} fontSize={FontSize.SIZE_18} fontColor={FontColor.LIGHT_GREY}>
               Накопленный опыт и технологии позволяют нам создавать простые и технологичные решения
            </Text>
            <img
               className={cls.image}
               src='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2021/10/tsifry.png'
               alt='инженер'
            />
            <HStack className={cls.infoContainer}>
               <div className={cls.column}>
                  <div className={cls.columnItem}>
                     <div className={cls.columnTitle}>
                        <span>3</span> уровня
                     </div>
                     <div className={cls.columnDescription}>контроля качества производства</div>
                  </div>
                  <div className={cls.columnItem}>
                     <div className={cls.columnTitle}>
                        <span>10</span> лет
                     </div>
                     <div className={cls.columnDescription}>гарантии на всю продукцию</div>
                  </div>
                  <div className={cls.columnItem}>
                     <div className={cls.columnTitle}>
                        <span>900</span> м<sup>2</sup>
                     </div>
                     <div className={cls.columnDescription}>склада с готовой продукцией</div>
                  </div>
               </div>
               <div className={cls.column}>
                  <div className={cls.columnItem}>
                     <div className={cls.columnTitle}>
                        <span>250</span> единиц
                     </div>
                     <div className={cls.columnDescription}>производственные мощности в месяц</div>
                  </div>
                  <div className={cls.columnItem}>
                     <div className={cls.columnTitle}>
                        <span>50</span> лет
                     </div>
                     <div className={cls.columnDescription}>минимальный срок эксплуациии</div>
                  </div>
                  <div className={cls.columnItem}>
                     <div className={cls.columnTitle}>
                        <span>12</span> человек
                     </div>
                     <div className={cls.columnDescription}>работают в нашей команде</div>
                  </div>
               </div>
            </HStack>
         </div>
      </article>
   );
});
