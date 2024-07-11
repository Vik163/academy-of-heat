import { useContext } from 'react';
import { ResizeContext } from '../context/ResizeContext';

export const useResize = () => {
   const { device } = useContext(ResizeContext);

   const isMobile = device === 'mobile';
   const isMobileL = device === 'mobileL';
   const isPad = device === 'pad';
   const isNotebook = device === 'notebook';
   const isDesktop = device === 'desktop';

   return { isMobile, isMobileL, isPad, isNotebook, isDesktop };
};
