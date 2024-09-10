import { memo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';

import cls from './CatalogComponent.module.scss';
import { FontColor, FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { productsLinks, cellarsLinks } from '@/shared/const/products/productsLinks';
import { FlexAlign, FlexJustify, FlexWrap } from '@/shared/ui/Stack/Flex';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteCellars, getRouteProduct } from '@/shared/const/router';
import { useResize } from '@/shared/lib/hooks/useResize';
import { Modal } from '@/shared/ui/Modal';

interface CatalogComponentProps {
   className?: string;
}

export const CatalogComponent = memo((props: CatalogComponentProps) => {
   const { className } = props;
   const { pathname } = useLocation();
   const [isOpen, setIsOpen] = useState(false);
   const { isMobile } = useResize();
   const isCellars = pathname === '/pogreba';
   const links = isCellars ? cellarsLinks : productsLinks;
   const title = isCellars ? 'Погреба пластиковые Земляк' : 'Каталог кессонов и погребов';

   window.scrollTo({
      top: 0,
   });

   const mods: Mods = { [cls.category]: isCellars || isMobile };

   const content = (nameLink: string, key: string, image: string) => {
      const el = (
         <VStack
            max
            justify={FlexJustify.BETWEEN}
            align={FlexAlign.START}
            className={classNames(cls.info, mods, [])}
         >
            <Text
               title={HeaderTagType.H_4}
               fontSize={FontSize.SIZE_18}
               fontWeight={FontWeight.TEXT_500}
               className={classNames(cls.titleLink, mods, [])}
            >
               {nameLink}
            </Text>
            <Button
               width={124}
               height={40}
               fontSize={FontSize.SIZE_15}
               fontWeight={FontWeight.TEXT_400}
               fontColor={FontColor.BUTTON}
               variant={ButtonVariant.FILLED}
               bgColor={ButtonBgColor.YELLOW}
               className={classNames('', {}, [cls.buttonSelect])}
            >
               Перейти
            </Button>
         </VStack>
      );

      return isCellars || isMobile ? (
         <div className={classNames(cls.link, mods, [])}>
            <img src={image} alt={key} className={classNames(cls.imageLink, mods, [])} />
            {el}
         </div>
      ) : (
         <div className={classNames(cls.link, mods, [])}>
            {el}
            <img src={image} alt={key} className={classNames(cls.imageLink, mods, [])} />
         </div>
      );
   };

   const answerPopup = (
      <div className={cls.container}>
         <Text title={HeaderTagType.H_3} fontWeight={FontWeight.TEXT_700} className={cls.answerTitle}>
            Вы переходите на сайт производителя - ТМ «ЗЕМЛЯК»
         </Text>
         <Text fontSize={FontSize.SIZE_15} fontWeight={FontWeight.TEXT_600} className={cls.textPopup}>
            Наша страница останется открытой
         </Text>
      </div>
   );

   const closeModal = () => {
      setIsOpen(false);
   };

   // const linkSite = (value: { image: string; link: string }, key: string, nameLink: string) => {
   //    return (
   //       <a aria-label='pogreba' href={value.link} target='_blank' rel='noreferrer' key={key}>
   //          {content(nameLink, key, value.image)}
   //       </a>
   //    );
   // };

   const clickLink = (link: string) => {
      setIsOpen(true);
      setTimeout(() => {
         // window.location.href = link; // остается на странице

         window.open(link); // открывает новую страницу
      }, 2000);
      setTimeout(() => {
         setIsOpen(false);
      }, 5000);
   };

   const linksCards = Object.entries(links).map(([key, value]) => {
      const nameLink = isCellars ? `Погреб ЗЕМЛЯК ${key}` : key;
      return value.link !== 'pogreba' ? (
         <div
            key={key}
            className={classNames(cls.linkContainer, mods, [])}
            onClick={() => clickLink(value.link)}
         >
            {content(nameLink, key, value.image)}
         </div>
      ) : (
         <AppLink
            to={value.link === 'pogreba' ? getRouteCellars() : getRouteProduct(value.link)}
            key={key}
            className={classNames(cls.linkContainer, mods, [])}
         >
            {content(nameLink, key, value.image)}
         </AppLink>
      );
   });

   return (
      <div className={classNames(cls.CatalogComponent, {}, [className])}>
         <div className={cls.container}>
            <Text title={HeaderTagType.H_1} fontWeight={FontWeight.TEXT_700} className={cls.title}>
               {title}
            </Text>
            <HStack wrap={FlexWrap.WPAP} className={classNames(cls.links, mods, [])}>
               {linksCards}
            </HStack>
         </div>
         {isOpen && (
            <Modal
               onClose={closeModal}
               isOpen={isOpen}
               buttonCloseHeight={20}
               buttonCloseRight={20}
               buttonCloseTop={isMobile ? -30 : 20}
               buttonCloseWidth={20}
               className={cls.modal}
               delayClose={0}
            >
               {answerPopup}
            </Modal>
         )}
      </div>
   );
});
