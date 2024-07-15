import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MontageComponent.module.scss';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { Player } from '@/shared/ui/Player';
import { Postman } from '@/shared/ui/Postman';
import { useResize } from '@/shared/lib/hooks/useResize';

export const MontageComponent = memo(() => {
   const [isOpenForm, setIsOpenForm] = useState(false);
   const { isMobile, isPad } = useResize();

   const sizes = () => {
      if (isPad) {
         return {
            width: 420,
            height: 280,
         };
      }
      if (isMobile) {
         return {
            width: 280,
            height: 200,
         };
      }
      return {
         width: 630,
         height: 423,
      };
   };

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   return (
      <article id='sec-montazh' className={cls.montazh}>
         <div className={cls.container}>
            {isMobile ? (
               <Text title={HeaderTagType.H_3} className={cls.title} fontColor={FontColor.TEXT_PRIMARY}>
                  Монтаж кессона <br /> за 1 день
               </Text>
            ) : (
               <Text title={HeaderTagType.H_3} className={cls.title} fontColor={FontColor.TEXT_PRIMARY}>
                  Монтаж кессона за 1 день
               </Text>
            )}
            <Text className={cls.description}>От нашего официального дилера </Text>
            <div className={classNames(cls.montazh_block, {}, [])}>
               <div className={cls.block_main}>
                  <Text className={cls.main_title}>В монтаж входят услуги:</Text>
                  <ul className={cls.main_list}>
                     <li>Копка котлована</li>
                     <li>Обрезка обсадной трубы</li>
                     <li>Монтаж кессона и трубопровода</li>
                     <li>Обсыпка пескоцементной смесью</li>
                     <li>Установка оборудования</li>
                  </ul>
                  <Button
                     height={40}
                     variant={ButtonVariant.FILLED}
                     bgColor={ButtonBgColor.YELLOW}
                     className={cls.btn}
                     fontSize={FontSize.SIZE_15}
                     fontColor={FontColor.BUTTON}
                     fontWeight={FontWeight.TEXT_400}
                     arrow
                     onClick={openForm}
                  >
                     Узнать подробнее
                  </Button>
               </div>
               <Player
                  url='https://www.youtube.com/watch?v=2rp0PbsVi6c'
                  width={sizes().width}
                  height={sizes().height}
                  className={cls.video}
                  addPanel={!isMobile && !isPad}
                  poster='https://xn--e1adkde9i.xn--p1ai/wp-content/uploads/2023/10/screenshot_1.png'
               />
            </div>
         </div>
         {isOpenForm && (
            <Postman
               title='Монтаж кессона за 1 день'
               buttonText='Узнать подробнее'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </article>
   );
});
