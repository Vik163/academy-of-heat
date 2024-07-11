import { memo } from 'react';
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

interface CatalogComponentProps {
   className?: string;
}

export const CatalogComponent = memo((props: CatalogComponentProps) => {
   const { className } = props;
   const { pathname } = useLocation();
   const isCellars = pathname === '/cellars';
   const links = isCellars ? cellarsLinks : productsLinks;
   const title = isCellars ? 'Погреба пластиковые Земляк' : 'Каталог кессонов и погребов';

   window.scrollTo({
      top: 0,
   });

   const mods: Mods = { [cls.category]: isCellars };

   const linksCards = Object.entries(links).map(([key, value]) => {
      const nameLink = isCellars ? `Погреб ЗЕМЛЯК ${key}` : key;
      return value.link !== 'cellars' ? (
         <a
            aria-label='cellars'
            href={value.link}
            target='_blank'
            className={classNames(cls.linkContainer, mods, [])}
            rel='noreferrer'
            key={key}
         >
            <img src={value.image} alt={key} className={cls.imageLink} />
            <VStack max justify={FlexJustify.BETWEEN} align={FlexAlign.START}>
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
         </a>
      ) : (
         <AppLink
            to={value.link === 'cellars' ? getRouteCellars() : getRouteProduct(value.link)}
            key={key}
            className={classNames(cls.linkContainer, mods, [])}
         >
            {isCellars && <img src={value.image} alt={key} className={cls.imageLink} />}
            <VStack max justify={FlexJustify.BETWEEN} align={FlexAlign.START}>
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
            {!isCellars && <img src={value.image} alt={key} className={cls.imageLink} />}
         </AppLink>
      );
   });

   return (
      <div className={classNames(cls.CatalogComponent, {}, [className])}>
         <div className={cls.container}>
            <Text
               title={HeaderTagType.H_3}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
               className={cls.title}
            >
               {title}
            </Text>
            <HStack wrap={FlexWrap.WPAP} gap={20}>
               {linksCards}
            </HStack>
         </div>
      </div>
   );
});
