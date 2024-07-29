import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ContactsPage.module.scss';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { Page } from '@/widgets/Page';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text, TextAlign } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import Map from '@/shared/ui/Map/Map';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { EMAIL, MAIN_COORD, MAIN_ZOOM, PHONE, PHONE_MOB, STORES_COORD } from '@/shared/const/main_info';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { Postman } from '@/shared/ui/Postman';
import { useResize } from '@/shared/lib/hooks/useResize';

export interface ContactsPageProps {
   className?: string;
}

const ContactsPage = memo((props: ContactsPageProps) => {
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
      <Page className={classNames(cls.ContactsPage, {}, [className])}>
         <div className={cls.container}>
            <Breadcrumb productName='Контакты' />
            <Text className={cls.title} title={HeaderTagType.H_1} fontWeight={FontWeight.TEXT_700}>
               Контакты
            </Text>
            <HStack justify={FlexJustify.BETWEEN} className={cls.content}>
               <VStack className={cls.infoContainer} justify={FlexJustify.BETWEEN}>
                  <div className={cls.info}>
                     <div className={cls.blockPhone}>
                        {isMobile ? (
                           <span>
                              {PHONE},<br /> {PHONE_MOB}
                           </span>
                        ) : (
                           <span>
                              {PHONE},&emsp; {PHONE_MOB}
                           </span>
                        )}
                        <p className={cls.textInfo}>
                           Работаем:
                           <br /> Понедельник - Пятница - с 8.30-18.30, <br />
                           Суббота - с 8.30-17.00,
                           <br /> Воскресенье - с 8.30-14.00
                        </p>
                     </div>
                     <div className={cls.email}>{EMAIL}</div>
                     {isMobile ? (
                        <div className={cls.address}>
                           г. Новокуйбышевск, <br />
                           ул. Молодогвардейская, д. 4
                        </div>
                     ) : (
                        <div className={cls.address}>г. Новокуйбышевск, ул. Молодогвардейская, д. 4</div>
                     )}
                  </div>
                  <HStack
                     className={cls.buttonContainer}
                     justify={FlexJustify.BETWEEN}
                     align={FlexAlign.CENTER}
                  >
                     <Text align={TextAlign.LEFT} className={cls.labelButton}>
                        Задайте любой вопрос:
                     </Text>
                     <Button
                        variant={ButtonVariant.FILLED}
                        bgColor={ButtonBgColor.YELLOW}
                        className={cls.btn}
                        fontSize={FontSize.SIZE_15}
                        fontColor={FontColor.BUTTON}
                        fontWeight={FontWeight.TEXT_400}
                        arrow
                        onClick={openForm}
                     >
                        Задать вопрос
                     </Button>
                  </HStack>
               </VStack>
               <Map location={MAIN_COORD} zoom={MAIN_ZOOM} coordsStores={STORES_COORD} className={cls.map} />
            </HStack>
         </div>
         {isOpenForm && (
            <Postman
               title='Задать вопрос'
               buttonText='Перезвоните мне'
               commentText='Ваш вопрос'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </Page>
   );
});

export default ContactsPage;
