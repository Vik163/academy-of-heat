import { useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/Loader';
import cls from './PageLoader.module.scss';
import { Portal } from '@/shared/ui/Portal/Portal';

interface PageLoaderProps {
   className?: string;
   screenFull?: boolean;
}

export const PageLoader = ({ className, screenFull }: PageLoaderProps) => {
   function getScrollbarWidth() {
      return window.innerWidth - document.documentElement.clientWidth;
   }

   useEffect(() => {
      if (screenFull) {
         const sizeScroll = getScrollbarWidth();
         // не прокручивается страница
         document.body.style.overflow = 'hidden';
         document.body.style.paddingRight = `${sizeScroll}px`;
      }
      // скролл добавляю при размонтировании
      return () => {
         if (screenFull) {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
         }
      };
   }, []);

   return screenFull ? (
      <Portal>
         <div className={classNames(cls.PageLoader, { [cls.screenFull]: screenFull }, [className])}>
            <Loader />
         </div>
      </Portal>
   ) : (
      <div className={cls.PageLoader}>
         <Loader />
      </div>
   );
};
