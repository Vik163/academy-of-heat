import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ResultsInfoComponent.module.scss';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';

interface ResultsInfoComponentProps {
   className?: string;
}

export const ResultsInfoComponent = memo((props: ResultsInfoComponentProps) => {
   const { className } = props;
   const [openPopup, setOpenPopup] = useState({ name: '', link: '' });

   const onOpen = (name: string) => {
      setOpenPopup({
         name,
         link:
            name === 'ведомость'
               ? 'https://земляк.рф/wp-content/uploads/2023/02/ip_tihonovskij_svodnaya_vedomost-1280x905.jpg'
               : 'https://земляк.рф/wp-content/uploads/2023/02/ip_tihonovskij_perechen_meropriyatij-1280x905.jpg',
      });
   };

   const onClose = () => {
      setOpenPopup({
         name: '',
         link: '',
      });
   };

   return (
      <article className={classNames(cls.ResultsInfoComponent, {}, [className])}>
         <div className={cls.container}>
            <Text
               title={HeaderTagType.H_4}
               fontSize={FontSize.SIZE_15}
               fontWeight={FontWeight.TEXT_700}
               className={cls.title}
            >
               Результаты СОУТ
            </Text>
            <Text>
               В соответствии с требованиями пункта 6 статьи 15 Федерального закона № 426 от 28.12.2013 г. «О
               специальной оценке условий труда» компания «ЗЕМЛЯК» размещает информацию о результатах
               проведения специальной оценки условий труда:
            </Text>
            <Text>Сводная ведомость результатов проведения специальной оценки условий труда</Text>
            <div className={cls.imageContainer} onClick={() => onOpen('ведомость')}>
               <img
                  src='https://земляк.рф/wp-content/uploads/2023/02/ip_tihonovskij_svodnaya_vedomost-768x543.jpg'
                  alt='ведомость'
                  className={cls.image}
               />
            </div>
            <Text>Перечень рекомендуемых мероприятий по улучшению условий труда</Text>
            <div className={cls.imageContainer} onClick={() => onOpen('перечень')}>
               <img
                  src='https://земляк.рф/wp-content/uploads/2023/02/ip_tihonovskij_perechen_meropriyatij-768x543.jpg'
                  alt='перечень'
                  className={cls.image}
               />
            </div>
         </div>
         {Boolean(openPopup.name) && (
            <Modal
               onClose={onClose}
               isOpen={Boolean(openPopup.name)}
               buttonCloseHeight={15}
               buttonCloseRight={15}
               buttonCloseTop={15}
               buttonCloseWidth={15}
            >
               <img src={openPopup.link} alt={openPopup.name} className={cls.imagePopup} />
            </Modal>
         )}
      </article>
   );
});
