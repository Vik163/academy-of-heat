import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArragementTitleComponent.module.scss';

import { Breadcrumb } from '@/features/Breadcrumbs';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { FlexJustify } from '@/shared/ui/Stack/Flex';
import { Postman } from '@/shared/ui/Postman';

interface ArragementTitleComponentProps {
   className?: string;
}

export const ArragementTitleComponent = memo((props: ArragementTitleComponentProps) => {
   const { className } = props;
   const [isOpenForm, setIsOpenForm] = useState(false);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   return (
      <article className={classNames(cls.ArragementTitleComponent, {}, [className])}>
         <div className={cls.container}>
            <Breadcrumb productName='Обустройство скважин' />
            <Text
               title={HeaderTagType.H_2}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
               className={cls.title}
            >
               Обустройство скважин
            </Text>
            <Text fontSize={FontSize.SIZE_17} fontColor={FontColor.LIGHT_GREY}>
               От нашего официального дилера
            </Text>
            <ul className={classNames(cls.list, {}, [cls.listMargin])}>
               <li className={classNames(cls.imageStyle, {}, [cls.image1])}>За 1 день по СНиПам</li>
               <li className={classNames(cls.imageStyle, {}, [cls.image2])}>Проверенные монтажники</li>
               <li className={classNames(cls.imageStyle, {}, [cls.image3])}>Оборудование надёжных брендов</li>
               <li className={classNames(cls.imageStyle, {}, [cls.image4])}>3 года гарантии на монтаж</li>
            </ul>
            <HStack className={cls.calculate} justify={FlexJustify.CENTER} gap={32}>
               <span className={cls.sum}>от 145 500 руб</span>
               <Button
                  className={cls.button}
                  arrow
                  variant={ButtonVariant.FILLED}
                  bgColor={ButtonBgColor.YELLOW}
                  width={223}
                  height={40}
                  fontColor={FontColor.BUTTON}
                  fontWeight={FontWeight.TEXT_400}
                  fontSize={FontSize.SIZE_15}
                  onClick={openForm}
               >
                  Рассчитать стоимость
               </Button>
            </HStack>
         </div>
         {isOpenForm && (
            <Postman
               title='Обустройство скважин'
               buttonText='Рассчитать стоимость'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </article>
   );
});
