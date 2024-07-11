import { memo, useCallback, useMemo, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';

import cls from './Navbar.module.scss';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import { NavbarItemType } from '../../model/types/navbar';
import { useNavbarItems } from '../../model/selectors/getNavbarItems';
import { FlexAlign } from '@/shared/ui/Stack/Flex';
import { Text, FontSize, FontWeight, TextAlign, FontColor } from '@/shared/ui/Text';
import { Modal } from '@/shared/ui/Modal';
import { PHONE, PHONE_MOB } from '@/shared/const/main_info';
import { Button, ButtonBgColor, ButtonVariant } from '@/shared/ui/Button';
import { Postman } from '@/shared/ui/Postman';
import { Logo } from '@/shared/ui/Logo';
import { useAnimate } from '@/shared/lib/hooks/useAnimate';
import { useResize } from '@/shared/lib/hooks/useResize';

interface NavbarProps {
   className?: string;
   openNavMobile?: boolean;
}

export const Navbar = memo(({ className, openNavMobile }: NavbarProps) => {
   const [openModal, setOpenModal] = useState(false);
   const [isAddLinks, setIsAddLinks] = useState<string[]>([]);
   const [navbarItemsList, setNavbarItemsList] = useState(useNavbarItems());
   const [isOpenForm, setIsOpenForm] = useState(false);
   const navRef = useRef<HTMLDivElement>(null);
   const { isMobile, isMobileL } = useResize();
   const { isOpen, isAnimate } = useAnimate(openNavMobile || false, 200);

   const openForm = () => {
      setIsOpenForm(true);
   };

   const closeForm = () => {
      setIsOpenForm(false);
   };

   const addLinks = useCallback(
      (text: string) => {
         if (isAddLinks.length < 1) {
            setIsAddLinks([text]);
         } else {
            isAddLinks.forEach((item) => {
               if (text === item) {
                  const w = isAddLinks.filter((arritem) => arritem !== text);
                  setIsAddLinks(w);
               } else if (text !== item && isAddLinks.length === 1) {
                  const q = isAddLinks.concat([text]);
                  setIsAddLinks(q);
               }
            });
         }

         navbarItemsList.forEach((item: NavbarItemType, i: number) => {
            if (isAddLinks.some((link) => item.text === link) && item.text === text) {
               return navbarItemsList.splice(i + 1, 2);
            }
            if (item.addItems && item.text === text) {
               return navbarItemsList.splice(i + 1, 0, ...item.addItems);
            }
         });
         setNavbarItemsList(navbarItemsList);
      },
      [isAddLinks],
   );

   const itemsList = useMemo(
      () =>
         navbarItemsList.map((item: NavbarItemType, i: number) => {
            return (
               <NavbarItem
                  addLinks={addLinks}
                  isAddLinks={isAddLinks.some((link) => item.text === link)}
                  item={item}
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
               />
            );
         }),
      [addLinks, isAddLinks, navbarItemsList],
   );
   const mods: Mods = {
      [cls.navMobile]: isMobile || isMobileL,
      [cls.openNavMobile]: isOpen,
      [cls.animate]: isAnimate,
   };

   return (
      <nav ref={navRef} className={classNames(cls.Navbar, mods, [className])}>
         <div>
            <Logo className={cls.navLogo} />
            <VStack role='navigation' className={cls.items} align={FlexAlign.START}>
               {itemsList}
            </VStack>
            {openModal && (
               <Modal
                  isOpen={openModal}
                  onClose={() => setOpenModal(false)}
                  buttonCloseHeight={30}
                  buttonCloseWidth={30}
                  buttonCloseRight={30}
                  buttonCloseTop={30}
                  className={cls.modalMenu}
               >
                  <VStack align={FlexAlign.START} className={cls.containerLinks}>
                     <Text
                        className={cls.menuLink}
                        fontSize={FontSize.SIZE_20}
                        fontWeight={FontWeight.TEXT_700}
                     >
                        Виды работ
                     </Text>
                     <Text
                        className={cls.menuLink}
                        fontSize={FontSize.SIZE_20}
                        fontWeight={FontWeight.TEXT_700}
                     >
                        Отзывы клиентов
                     </Text>
                     <Text
                        className={cls.menuLink}
                        fontSize={FontSize.SIZE_20}
                        fontWeight={FontWeight.TEXT_700}
                     >
                        Акции
                     </Text>
                     <Text
                        className={cls.menuLink}
                        fontSize={FontSize.SIZE_20}
                        fontWeight={FontWeight.TEXT_700}
                     >
                        Контакты
                     </Text>
                  </VStack>
               </Modal>
            )}
         </div>
         <VStack gap={20} className={cls.phoneContainer} align={FlexAlign.CENTER}>
            <Text
               className={cls.phone}
               fontSize={FontSize.SIZE_14}
               fontWeight={FontWeight.TEXT_900}
               align={TextAlign.CENTER}
            >
               {PHONE} <br /> {PHONE_MOB}
            </Text>
            <Button
               width={130}
               height={26}
               variant={ButtonVariant.FILLED}
               bgColor={ButtonBgColor.YELLOW}
               fontColor={FontColor.TEXT_PRIMARY}
               fontSize={FontSize.SIZE_12}
               fontWeight={FontWeight.TEXT_400}
               className={cls.button}
               onClick={openForm}
            >
               Обратный звонок
            </Button>
         </VStack>
         {isOpenForm && (
            <Postman
               title='Обратный звонок'
               buttonText='Перезвоните мне'
               commentText='Комментарий'
               closeForm={closeForm}
               isOpen={isOpenForm}
            />
         )}
      </nav>
   );
});
