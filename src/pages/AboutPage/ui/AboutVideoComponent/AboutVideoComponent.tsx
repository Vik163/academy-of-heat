import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AboutVideoComponent.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Player } from '@/shared/ui/Player';

interface AboutVideoComponentProps {
   className?: string;
}

export const AboutVideoComponent = memo((props: AboutVideoComponentProps) => {
   const { className } = props;

   return (
      <article className={classNames(cls.AboutVideoComponent, {}, [className])}>
         <VStack gap={50}>
            <Text title={HeaderTagType.H_3} fontSize={FontSize.SIZE_36} fontWeight={FontWeight.TEXT_700}>
               Кессоны и погреба Торговой марки ЗЕМЛЯК
            </Text>
            <Player
               className={cls.player}
               width={1014}
               height={570}
               url='https://www.youtube.com/watch?v=zfRsokSlNzE'
               poster='https://i3.ytimg.com/vi/zfRsokSlNzE/maxresdefault.jpg'
            />
         </VStack>
      </article>
   );
});
