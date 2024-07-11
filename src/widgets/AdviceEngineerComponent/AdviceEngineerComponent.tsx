import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AdviceEngineerComponent.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FontColor, FontSize, FontWeight, Text } from '@/shared/ui/Text';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { EMAIL } from '@/shared/const/main_info';
import { Postman } from '@/shared/ui/Postman';
// import whatsapp from '@/shared/assets/icons/icon-whatsapp.svg';
// import telegram from '@/shared/assets/icons/icon-telegram.svg';

interface AdviceEngineerComponentProps {
   className?: string;
}

export const AdviceEngineerComponent = memo((props: AdviceEngineerComponentProps) => {
   const { className } = props;
   const [isOpenForm, setIsOpenForm] = useState(false);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   return (
      <div className={classNames(cls.AdviceEngineer, {}, [className])}>
         <HStack gap={20} className={classNames(cls.container, {}, [className])}>
            <div className={cls.faceContainer}>
               <img
                  className={cls.face}
                  src='https://земляк.рф/wp-content/uploads/2021/10/tsifry.png'
                  alt='инженер'
               />
            </div>
            <VStack className={cls.infoContainer} align={FlexAlign.START}>
               <Text
                  fontSize={FontSize.SIZE_36}
                  fontWeight={FontWeight.TEXT_700}
                  fontColor={FontColor.TEXT_PRIMARY}
               >
                  Посоветуйтесь с инженером
               </Text>
               <Text
                  className={cls.description}
                  fontSize={FontSize.SIZE_18}
                  fontColor={FontColor.TEXT_PRIMARY}
               >
                  Подбор кессона, оборудования, особенности монтажа, скидки и оптовые цены - любой вопрос!
               </Text>
               <HStack>
                  <Button
                     width={166}
                     height={40}
                     variant={ButtonVariant.FILLED}
                     bgColor={ButtonBgColor.YELLOW}
                     fontColor={FontColor.BUTTON}
                     fontWeight={FontWeight.TEXT_400}
                     fontSize={FontSize.SIZE_15}
                     arrow
                     className={cls.button}
                     onClick={openForm}
                  >
                     Задать вопрос
                  </Button>
                  <Text className={cls.link}>{EMAIL}</Text>
               </HStack>
               <Text className={cls.caption} fontSize={FontSize.SIZE_14} fontColor={FontColor.TEXT_PRIMARY}>
                  Дмитрий Попов, эксперт по водоснабжению
               </Text>
            </VStack>
         </HStack>
         {isOpenForm && (
            <Postman
               title='Задать вопрос'
               buttonText='Задать вопрос'
               commentText='Ваш вопрос'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </div>
   );
});
