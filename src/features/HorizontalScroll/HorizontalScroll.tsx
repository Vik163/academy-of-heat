import { useState, useRef, useEffect } from 'react';

import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import cls from './HorizontalScroll.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface HorizontalScrollProps {
   elements: string[];
}

export const HorizontalScroll = (props: HorizontalScrollProps) => {
   const { elements } = props;
   const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
   const [canScrollRight, setCanScrollRight] = useState<boolean>(false);

   const listRef = useRef<HTMLUListElement>(null);

   const checkForScrollPosition = () => {
      const { current } = listRef;
      if (current) {
         const { scrollLeft, scrollWidth, clientWidth } = current;
         setCanScrollLeft(scrollLeft > 0);
         setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
      }
   };

   const debounceCheckForScrollPosition = useDebounce(
      checkForScrollPosition,
      50,
   );

   const scrollContainerBy = (distance: number) =>
      listRef.current?.scrollBy({ left: distance, behavior: 'smooth' });

   useEffect(() => {
      const { current } = listRef;
      checkForScrollPosition();
      current?.addEventListener('scroll', debounceCheckForScrollPosition);

      return () => {
         current?.removeEventListener('scroll', debounceCheckForScrollPosition);
      };
   }, [debounceCheckForScrollPosition]);

   return (
      <div className={cls.scrollableContainer}>
         <ul className={cls.list} ref={listRef}>
            {elements.map((card) => (
               <li
                  key={card}
                  className={cls.item}
                  style={{
                     backgroundImage: `url(${card})`,
                  }}
               ></li>
            ))}
         </ul>
         {canScrollLeft && (
            <button
               type='button'
               disabled={!canScrollLeft}
               onClick={() => scrollContainerBy(-103)}
               className={classNames(cls.button, {}, [cls.buttonLeft])}
            >
               {' '}
            </button>
         )}
         {canScrollRight && (
            <button
               type='button'
               disabled={!canScrollRight}
               onClick={() => scrollContainerBy(103)}
               className={classNames(cls.button, {}, [cls.buttonRight])}
            >
               {' '}
            </button>
         )}
      </div>
   );
};
