import React, { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
   isOpen: boolean;
   onClose: () => void;
   onAnimate?: (bool: boolean) => void;
   delayClose?: number;
   animatePopup?: boolean;
}

export function useModal(props: UseModalProps) {
   const { isOpen, onClose, onAnimate, delayClose } = props;
   const [isMounted, setIsMounted] = useState(false);
   const [animatePopup, setAnimatePopup] = useState(false);

   const timerRef = useRef<ReturnType<typeof setTimeout>>();

   //  высчитывает ширину скрола ---------------------------------
   // нужно было когда .root был {max-width: 100vw}
   // const page = document.querySelector<HTMLElement>('.app');
   // const { scrollbarWidth, bodyScrollable } = useBodyScrollable();
   // ---------------------------------------------------------------

   const onContentClick = (e: React.MouseEvent) => {
      e.stopPropagation();
   };

   useEffect(() => {
      if (isOpen) {
         setIsMounted(true);
         timerRef.current = setTimeout(() => {
            setAnimatePopup(true);
            if (onAnimate) onAnimate(true);
         }, 25);
      }
   }, [isOpen]);

   const handleClose = useCallback(() => {
      if (onAnimate) onAnimate(false);
      setAnimatePopup(false);
      timerRef.current = setTimeout(() => {
         onClose();
      }, delayClose);
   }, [delayClose, onAnimate, onClose]);

   const onKeyDown = useCallback(
      (e: KeyboardEvent) => {
         if (e.key === 'Escape') {
            handleClose();
         }
      },
      [handleClose],
   );

   function getScrollbarWidth() {
      return window.innerWidth - document.documentElement.clientWidth;
   }

   useEffect(() => {
      const header = document.querySelector('#header') as HTMLDivElement;

      if (isOpen) {
         const sizeScroll = getScrollbarWidth();

         document.addEventListener('keydown', onKeyDown);
         // не прокручивается страница
         document.body.style.overflow = 'hidden';
         document.body.style.paddingRight = `${sizeScroll}px`;
         if (header) header.style.paddingRight = `${sizeScroll}px`;
      }
      // скролл добавляю при размонтировании
      return () => {
         if (!isOpen) {
            clearTimeout(timerRef.current);
            document.removeEventListener('keydown', onKeyDown);
         }
         document.body.style.overflow = 'unset';
         document.body.style.paddingRight = '0px';
         header.style.paddingRight = '0px';
      };
   }, [isOpen, onKeyDown]);

   return { handleClose, onContentClick, isMounted, animatePopup };
}
