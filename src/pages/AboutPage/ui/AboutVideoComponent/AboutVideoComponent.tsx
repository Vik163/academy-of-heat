import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AboutVideoComponent.module.scss';
import { FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Player } from '@/shared/ui/Player';

interface AboutVideoComponentProps {
   className?: string;
}

export const AboutVideoComponent = memo((props: AboutVideoComponentProps) => {
   const { className } = props;

   return (
      <article className={classNames(cls.AboutVideoComponent, {}, [className])}>
         <Text title={HeaderTagType.H_2} fontWeight={FontWeight.TEXT_700} className={cls.title}>
            Кессоны и погреба Торговой марки ЗЕМЛЯК
         </Text>
         <Player
            className={cls.player}
            url='https://www.youtube.com/watch?v=zfRsokSlNzE'
            poster='https://i3.ytimg.com/vi/zfRsokSlNzE/maxresdefault.jpg'
         />
      </article>
   );
});
