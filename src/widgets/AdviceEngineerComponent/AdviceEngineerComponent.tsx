import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AdviceEngineerComponent.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FontColor, FontSize, FontWeight, Text } from '@/shared/ui/Text';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { EMAIL } from '@/shared/const/main_info';
import { Postman } from '@/shared/ui/Postman';
import { useResize } from '@/shared/lib/hooks/useResize';
// import whatsapp from '@/shared/assets/icons/icon-whatsapp.svg';
// import telegram from '@/shared/assets/icons/icon-telegram.svg';

interface AdviceEngineerComponentProps {
   className?: string;
}

export const AdviceEngineerComponent = memo((props: AdviceEngineerComponentProps) => {
   const { className } = props;
   const [isOpenForm, setIsOpenForm] = useState(false);
   const { isMobile } = useResize();

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   return (
      <div className={classNames(cls.AdviceEngineer, {}, [className])}>
         <HStack gap={20} className={classNames(cls.container, {}, [className])}>
            {!isMobile && (
               <div className={cls.faceContainer}>
                  <img
                     className={cls.face}
                     src='https://земляк.рф/wp-content/uploads/2021/10/tsifry.png'
                     alt='инженер'
                  />
               </div>
            )}
            <VStack className={cls.infoContainer} align={FlexAlign.START}>
               <Text
                  fontWeight={FontWeight.TEXT_700}
                  fontColor={FontColor.TEXT_PRIMARY}
                  className={cls.title}
               >
                  Посоветуйтесь с инженером
               </Text>
               <Text className={cls.description} fontColor={FontColor.TEXT_PRIMARY}>
                  Подбор кессона, оборудования, особенности монтажа, скидки и оптовые цены - любой вопрос!
               </Text>
               {isMobile && (
                  <div className={cls.faceContainer}>
                     <img
                        className={cls.face}
                        src='https://земляк.рф/wp-content/uploads/2021/10/tsifry.png'
                        alt='инженер'
                     />
                  </div>
               )}
               {isMobile && (
                  <Text
                     className={cls.caption}
                     fontSize={FontSize.SIZE_14}
                     fontColor={FontColor.TEXT_PRIMARY}
                  >
                     Дмитрий Попов, эксперт по водоснабжению
                  </Text>
               )}
               <HStack className={cls.buttons}>
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
               {!isMobile && (
                  <Text
                     className={cls.caption}
                     fontSize={FontSize.SIZE_14}
                     fontColor={FontColor.TEXT_PRIMARY}
                  >
                     Дмитрий Попов, эксперт по водоснабжению
                  </Text>
               )}
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
