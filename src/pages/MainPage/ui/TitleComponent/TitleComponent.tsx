import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './TitleComponent.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { FlexAlign, FlexWrap } from '@/shared/ui/Stack/Flex';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import image from '@/shared/assets/images/several-keson.png';
import { Postman } from '@/shared/ui/Postman';

interface TitleComponentProps {
   className?: string;
}

export const TitleComponent = memo((props: TitleComponentProps) => {
   const { className } = props;

   const [isOpenForm, setIsOpenForm] = useState(false);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   return (
      <article id='title' className={classNames(cls.TitleComponent, {}, [className])}>
         <VStack className={cls.infoContainer} align={FlexAlign.START}>
            <Text title={HeaderTagType.H_1} className={cls.title} fontColor={FontColor.WHITE}>
               Погреба <br /> и кессоны <br /> для скважин
            </Text>
            <Text fontSize={FontSize.SIZE_18} className={cls.production}>
               Собственное производство в Подмосковье по европейским стандартам
            </Text>
            <HStack className={cls.featuresList} wrap={FlexWrap.WPAP}>
               <div className={cls.featuresItem}>14 рёбер жёсткости</div>
               <div className={cls.featuresItem}>Утеплённая крышка</div>
               <div className={cls.featuresItem}>Надёжные грутозацепы</div>
               <div className={cls.featuresItem}>Монолитный полипропилен</div>
            </HStack>
            <Button
               fontSize={FontSize.SIZE_15}
               fontWeight={FontWeight.TEXT_400}
               fontColor={FontColor.BUTTON}
               variant={ButtonVariant.FILLED}
               bgColor={ButtonBgColor.YELLOW}
               className={classNames('', {}, [cls.buttonSelect])}
               onClick={openForm}
               arrow
            >
               Подобрать кессон/погреб
            </Button>
            <div className={cls.imageContainer}>
               <img src={image} className={cls.mainImage} alt='Кессон'></img>
            </div>
         </VStack>
         {isOpenForm && (
            <Postman
               title='Подобрать кессон/погреб'
               buttonText='Подобрать'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </article>
   );
});
