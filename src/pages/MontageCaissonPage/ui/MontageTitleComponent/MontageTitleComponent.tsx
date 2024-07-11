import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MontageTitleComponent.module.scss';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { FlexJustify } from '@/shared/ui/Stack/Flex';
import { Postman } from '@/shared/ui/Postman';

interface MontageTitleComponentProps {
   className?: string;
}

export const MontageTitleComponent = memo((props: MontageTitleComponentProps) => {
   const { className } = props;
   const [isOpenForm, setIsOpenForm] = useState(false);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   return (
      <article className={classNames(cls.MontageTitleComponent, {}, [className])}>
         <div className={cls.container}>
            <Breadcrumb productName='Монтаж кессона' />
            <Text
               title={HeaderTagType.H_2}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
               className={cls.title}
            >
               Монтаж кессона за 1 день
            </Text>
            <Text fontSize={FontSize.SIZE_17} fontColor={FontColor.LIGHT_GREY}>
               От нашего официального дилера
            </Text>
            <Text fontSize={FontSize.SIZE_16} fontWeight={FontWeight.TEXT_600} className={cls.listTitle}>
               В монтаж входят услуги:
            </Text>
            <ul className={classNames(cls.list, {}, [cls.listMargin])}>
               <li className={cls.imageStyle}>Копка котлована</li>
               <li className={cls.imageStyle}>Обрезка обсадной трубы</li>
               <li className={cls.imageStyle}>Монтаж кессона и трубопровода</li>
               <li className={cls.imageStyle}>Обсыпка пескоцементной смесью</li>
               <li className={cls.imageStyle}>Установка оборудования</li>
            </ul>
            <HStack className={cls.calculate} justify={FlexJustify.CENTER} gap={32}>
               <span className={cls.sum}>От 25 000 руб</span>
               <Button
                  className={cls.button}
                  arrow
                  variant={ButtonVariant.FILLED}
                  bgColor={ButtonBgColor.YELLOW}
                  width={223}
                  height={40}
                  fontColor={FontColor.BUTTON}
                  fontSize={FontSize.SIZE_15}
                  fontWeight={FontWeight.TEXT_400}
                  onClick={openForm}
               >
                  Рассчитать стоимость
               </Button>
            </HStack>
         </div>
         {isOpenForm && (
            <Postman
               title='Монтаж кессона за 1 день'
               buttonText='Рассчитать стоимость'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </article>
   );
});
