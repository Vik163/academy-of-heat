import { useEffect, useRef, useState } from 'react';

//* анимация с display: none (принимает 1-монтирование, 2-задержка на размонтирование)
//* возвращает isOpen - управление display, isAnimate - управление анимацией

export const useAnimate = (open: boolean, delay: number) => {
   const [isAnimate, setIsAnimate] = useState(false);
   const [isOpen, setIsOpen] = useState(false);
   const timerRef = useRef<ReturnType<typeof setTimeout>>();

   useEffect(() => {
      if (open) {
         setIsOpen(true);
         timerRef.current = setTimeout(() => {
            setIsAnimate(true);
         }, 25);
      } else {
         setIsAnimate(false);
         timerRef.current = setTimeout(() => {
            setIsOpen(false);
         }, delay);
      }

      return () => {
         clearTimeout(timerRef.current);
      };
   }, [open]);

   return { isOpen, isAnimate };
};
