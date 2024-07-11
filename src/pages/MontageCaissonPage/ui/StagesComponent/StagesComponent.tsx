import { memo, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './StagesComponent.module.scss';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { stages } from '@/shared/const/installatons-stages';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Postman } from '@/shared/ui/Postman';

interface StagesComponentProps {
   className?: string;
}

export const StagesComponent = memo((props: StagesComponentProps) => {
   const { className } = props;
   const [stage, setStage] = useState(stages[0]);
   const [count, setCount] = useState(0);

   const increase = () => {
      if (stages.length > count + 1) {
         setCount(count + 1);
      }
   };
   const decrease = () => {
      if (count > 0) setCount(count - 1);
   };

   useEffect(() => {
      setStage(stages[count]);
   }, [count]);

   return (
      <article className={classNames(cls.StagesComponent, {}, [className])}>
         <div className={cls.container}>
            <Text
               title={HeaderTagType.H_3}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
               className={cls.title}
            >
               Этапы установки
            </Text>
            <HStack gap={116}>
               <div className={cls.addImage}>
                  <img src={stage.image} alt={stage.stage} />
               </div>
               <VStack className={cls.stagesInfo} align={FlexAlign.START}>
                  <HStack className={cls.infoContainer} gap={6} align={FlexAlign.START}>
                     <span className={cls.numStage}>{stage.stage}&nbsp;&mdash;</span>
                     <Text className={cls.nameStage}>{stage.stageName}</Text>
                  </HStack>
                  <Text className={cls.description}>{stage.description}</Text>
                  {stage.stage === '6 этап' ? (
                     <Postman
                        buttonText='Рассчитать стоимость монтажа'
                        kategory='Рассчитать стоимость монтажа'
                     />
                  ) : (
                     <HStack className={cls.buttonsContainer} gap={20}>
                        <Button
                           arrow
                           width={55}
                           height={40}
                           variant={ButtonVariant.FILLED}
                           bgColor={ButtonBgColor.GREY}
                           className={cls.buttonBack}
                           onClick={decrease}
                        ></Button>
                        <Button
                           arrow
                           variant={ButtonVariant.FILLED}
                           bgColor={ButtonBgColor.YELLOW}
                           width={187}
                           height={40}
                           fontColor={FontColor.BUTTON}
                           fontWeight={FontWeight.TEXT_400}
                           onClick={increase}
                        >
                           Следующий этап
                        </Button>
                     </HStack>
                  )}
               </VStack>
            </HStack>
         </div>
      </article>
   );
});
