import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './EquipmentComponent.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, FontWeight, HeaderTagType, FontSize, FontColor } from '@/shared/ui/Text';
import { equipmentListLeft, equipmentListRight } from '../../shared/const/equipmentList';
import { EquipmentList } from '../../shared/types/equipment';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { Postman } from '@/shared/ui/Postman';

interface EquipmentComponentProps {
   className?: string;
}

export const EquipmentComponent = memo((props: EquipmentComponentProps) => {
   const { className } = props;
   const [isOpenForm, setIsOpenForm] = useState(false);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   return (
      <article className={classNames(cls.EquipmentComponent, {}, [className])}>
         <div className={cls.mainInfo}>
            <Text title={HeaderTagType.H_3} fontWeight={FontWeight.TEXT_700} className={cls.title}>
               Производим на чешском оборудовании
            </Text>
            <Text className={cls.description} fontColor={FontColor.LIGHT_GREY}>
               По европейским стандартам с выдержанным технологическим процессом
            </Text>
            <HStack justify={FlexJustify.BETWEEN} className={cls.container} align={FlexAlign.START}>
               <VStack className={cls.listContainer} align={FlexAlign.START}>
                  {equipmentListLeft.map((i: EquipmentList) => (
                     <div key={i.title} className={cls.itemContainer}>
                        <img src={i.image} alt={i.title} className={cls.image} />
                        <Text
                           className={cls.itemTitle}
                           title={HeaderTagType.H_4}
                           fontWeight={FontWeight.TEXT_700}
                        >
                           {i.title}
                        </Text>
                        <Text
                           className={cls.itemDescription}
                           fontSize={FontSize.SIZE_14}
                           fontColor={FontColor.LIGHT_GREY}
                        >
                           {i.description}
                        </Text>
                     </div>
                  ))}
               </VStack>
               <VStack className={cls.listContainer} align={FlexAlign.START}>
                  {equipmentListRight.map((i: EquipmentList) => (
                     <div key={i.title} className={cls.itemContainer}>
                        <img src={i.image} alt={i.title} className={cls.image} />
                        <Text
                           className={cls.itemTitle}
                           title={HeaderTagType.H_4}
                           fontWeight={FontWeight.TEXT_700}
                           fontSize={FontSize.SIZE_16}
                        >
                           {i.title}
                        </Text>
                        <Text
                           className={cls.itemDescription}
                           fontSize={FontSize.SIZE_14}
                           fontColor={FontColor.LIGHT_GREY}
                        >
                           {i.description}
                        </Text>
                     </div>
                  ))}
               </VStack>
            </HStack>
            <Button
               className={cls.button}
               bgColor={ButtonBgColor.YELLOW}
               variant={ButtonVariant.FILLED}
               fontColor={FontColor.BUTTON}
               fontWeight={FontWeight.TEXT_400}
               fontSize={FontSize.SIZE_15}
               onClick={openForm}
            >
               Хочу приехать на склад
            </Button>
            <Text fontSize={FontSize.SIZE_14} fontColor={FontColor.LIGHT_GREY} className={cls.buttonText}>
               Приезжайте на склад в г. Новокуйбышевске и убедитесь в качестве
            </Text>
         </div>
         {isOpenForm && (
            <Postman
               title='Хочу приехать на склад'
               buttonText='Хочу на склад'
               commentText='Желаемая дата и время'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </article>
   );
});
