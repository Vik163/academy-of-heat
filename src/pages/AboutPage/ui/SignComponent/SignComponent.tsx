import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './SignComponent.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { FlexJustify } from '@/shared/ui/Stack/Flex';
import { Modal } from '@/shared/ui/Modal';

interface SignComponentProps {
   className?: string;
}

export const SignComponent = memo((props: SignComponentProps) => {
   const { className } = props;
   const [isOpenPopup, setIsOpenPopup] = useState(false);
   const [animatePopup, setAnimatePopup] = useState(false);
   const [sizesPopup, setSizesPopup] = useState({ height: 0, width: 0 });

   const openPopup = () => {
      setSizesPopup({ height: window.screen.height, width: window.screen.width });

      setIsOpenPopup(true);
   };

   const closePopup = () => {
      setIsOpenPopup(false);
   };

   const onAnimate = (bool: boolean) => {
      setAnimatePopup(bool);
   };

   return (
      <article className={classNames(cls.SignComponent, {}, [className])}>
         <HStack max justify={FlexJustify.CENTER} className={cls.container}>
            <div onClick={openPopup}>
               <img
                  className={cls.image}
                  src='https://земляк.рф/wp-content/uploads/2022/10/certificate-1280x1810.jpg'
                  alt='Свидетельство'
               />
            </div>
            <VStack>
               <Text title={HeaderTagType.H_4} fontWeight={FontWeight.TEXT_700} className={cls.title}>
                  Товарный знак &quot;ЗЕМЛЯК&quot;
               </Text>
               <Text
                  className={cls.subtitle}
                  title={HeaderTagType.H_4}
                  fontSize={FontSize.SIZE_17}
                  fontColor={FontColor.TEXT_PRIMARY}
               >
                  На продукцию компании «ЗЕМЛЯК»
                  <br /> 2 сентября 2022 года в Государственном реестре зарегистрирован товарный знак.
                  <br /> Номер государственной регистрации 889236.
               </Text>
            </VStack>
         </HStack>
         {isOpenPopup && (
            <Modal
               onClose={closePopup}
               isOpen={isOpenPopup}
               buttonCloseHeight={15}
               buttonCloseRight={15}
               buttonCloseTop={15}
               buttonCloseWidth={15}
               onAnimate={onAnimate}
               delayClose={300}
               className={cls.modal}
               isCenter
            >
               <img
                  // /2 -  scale(1.7)
                  style={{ maxHeight: `${sizesPopup.height / 2}px`, maxWidth: `${sizesPopup.width / 2}px` }}
                  className={classNames(cls.imagePopup, { [cls.openImage]: animatePopup }, [])}
                  src='https://земляк.рф/wp-content/uploads/2022/10/certificate-1280x1810.jpg'
                  alt='Свидетельство'
               />
            </Modal>
         )}
      </article>
   );
});
