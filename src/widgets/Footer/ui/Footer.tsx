import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Footer.module.scss';

import { HStack, VStack } from '@/shared/ui/Stack';
import { FlexAlign, FlexJustify } from '@/shared/ui/Stack/Flex';
import { getRouteAbout, getRouteCatalog, getRouteContacts, getRouteQuestions } from '@/shared/const/router';
import { FontColor, FontSize, Text } from '@/shared/ui/Text';
import { Logo } from '@/shared/ui/Logo';
import { EMAIL, PHONE, PHONE_MOB } from '@/shared/const/main_info';
import polity from '../../../shared/assets/politika_konfidenczialnost_actepla.pdf';

interface FooterProps {
   className?: string;
}

export const Footer = memo((props: FooterProps) => {
   const { className } = props;
   const year = new Date().getFullYear();

   return (
      <footer>
         <HStack
            className={classNames(cls.container, {}, [className])}
            justify={FlexJustify.BETWEEN}
            align={FlexAlign.START}
         >
            <div className={cls.footerInfo}>
               <Logo className={cls.logo} />
               <p className={cls.textInfo}>
                  Самарская область, г. Новокуйбышевск, <br />
                  ул. Молодогвардейская, д. 4
                  <br /> email: &nbsp;
                  <span className={cls.post}>{EMAIL}</span>
                  <br />
                  тел. {PHONE}, &nbsp;{PHONE_MOB}
               </p>
               <p className={cls.textInfo}>
                  Работаем:
                  <br /> Понедельник - Пятница - с 8.30-18.30, <br />
                  Суббота - с 8.30-17.00,
                  <br /> Воскресенье - с 8.30-14.00
               </p>
               <p className={cls.textInfo}>Оплата: все виды расчета</p>
               <p className={cls.textInfo}>Доставка: обговаривается индивидуально</p>
               <p className={cls.textInfo}>Посещение склада по договорённости</p>
               <p className={cls.textInfo}>{year} © ТМ «ЗЕМЛЯК». Все права защищены.</p>
            </div>
            <VStack className={cls.links} align={FlexAlign.START} justify={FlexJustify.START}>
               <Link to={getRouteCatalog()} className={cls.link}>
                  Каталог
               </Link>
               <Link to={getRouteAbout()} className={cls.link}>
                  О кампании
               </Link>
               <Link to={getRouteContacts()} className={cls.link}>
                  Контакты
               </Link>
               <Link to={getRouteQuestions()} className={cls.link}>
                  Вопрос-ответ
               </Link>
            </VStack>
            <VStack className={cls.sequrityInfo} align={FlexAlign.START} gap={20}>
               <Text fontSize={FontSize.SIZE_11} fontColor={FontColor.LIGHT_GREY}>
                  Любая информация, представленная на данном сайте, носит исключительно информационный
                  характер и ни при каких условиях не является публичной офертой, определяемой положением
                  статьи 437 ГК РФ. Отправляя сведения через любую электронную форму на этом сайте, вы даёте
                  согласие на обработку ваших персональных данных.
               </Text>
               <a href={polity} className={cls.politics} target='_blank' rel='noopener noreferrer'>
                  Политика конфиденциальности
               </a>
            </VStack>
         </HStack>
      </footer>
   );
});
