import { type ReactNode, memo, MutableRefObject, useRef, useEffect, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Page.module.scss';

import arrow from '../../shared/assets/icons/icon-arrow-top.svg';
import { Icon } from '@/shared/ui/Icon';
import { useTrottle } from '@/shared/lib/hooks/useTrottle';

export enum PageDirection {
   VIRTICAL = 'vertical',
   HORIZONTAL = 'horizontal',
}

export enum PageAlign {
   START = 'align_start',
   END = 'align_end',
   CENTER = 'align_center',
}

interface PageProps {
   className?: string;
   children: ReactNode;
   direction?: PageDirection;
   align?: PageAlign;
}

const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
   const { className, children, direction = PageDirection.VIRTICAL, align = PageAlign.CENTER } = props;
   const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
   const pageWithScrollRef = useRef() as MutableRefObject<HTMLDivElement>;
   const [scroll, setScroll] = useState(0);

   // useEffect(() => {
   //    if (!saveScroll)
   //       window.scrollTo({
   //          top: 0,
   //          behavior: 'smooth',
   //       });

   //    if (animationScroll) {
   //       // с анимацией
   //       const scrollWithoutPathname = pathname === '/' ? 0 : 600;

   //       window.scrollTo({
   //          top: scroll[pathname] ? scroll[pathname] : scrollWithoutPathname,
   //          behavior: 'smooth',
   //       });

   //       setDelayScroll(false);
   //       setTimeout(() => {
   //          setDelayScroll(true);
   //       }, 2000);
   //    } else if (hasScroll && !animationScroll) {
   //       // без анимации
   //       pageWithScrollRef.current.scrollTop = scroll[pathname];
   //    } else {
   //       window.scrollY = scroll[pathname];
   //    }
   // }, [pathname]);

   // const onScroll = useTrottle((e: SyntheticEvent<HTMLDivElement>) => {
   //    dispatch(
   //       scrollSaveActions.setScrollPosition({
   //          position: hasScroll ? e.currentTarget.scrollTop : window.scrollY,
   //          //
   //          path: pathname,
   //       }),
   //    );
   // }, 500);

   // useEffect(() => {
   //    if (!hasScroll && delayScroll && saveScroll) {
   //       window.addEventListener('scroll', onScroll);

   //       return () => {
   //          window.removeEventListener('scroll', onScroll);
   //       };
   //    }
   // }, [delayScroll]);

   const scrollTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   const handleScroll = useTrottle(() => {
      setScroll(window.scrollY);
   }, 200);

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <section
         // ставится если нужен внутренный скролл в page
         ref={pageWithScrollRef}
         className={classNames(cls.Page, {}, [className, cls[direction], cls[align]])}
         id={PAGE_ID}
      >
         {children}
         <div className={cls.trigger} ref={triggerRef} />
         {scroll > 1000 && (
            <div className={cls.arrowTop} onClick={scrollTop}>
               <Icon Svg={arrow} />
            </div>
         )}
      </section>
   );
});
