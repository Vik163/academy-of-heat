import { useEffect, useState } from 'react';
import { useResize } from './useResize';

export const useSizesScreen = () => {
   const [sizesPopup, setSizesPopup] = useState({ height: 0, width: 0 });
   const { isMobile, isPad, isNotebook } = useResize();

   useEffect(() => {
      setSizesPopup({ height: window.screen.height, width: window.screen.width });
   }, [isMobile, isPad, isNotebook]);

   return { width: sizesPopup.width, height: sizesPopup.height };
};
