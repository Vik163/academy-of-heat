/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { ResizeContext } from '@/shared/lib/context/ResizeContext';
import { Devices } from '@/shared/types/devices';

const points = [400, 600, 800, 1200];

interface ResizeProviderProps {
   children: ReactNode;
}

const ResizeProvider = (props: ResizeProviderProps) => {
   const { children } = props;

   const [device, setDevice] = useState<Devices>('');
   let size: Devices = '';

   const handler = useCallback(() => {
      const num = window.innerWidth;

      if (num === 320) {
         size = 'mobile';
      } else if (num < 401) {
         size = size === 'mobile' ? 'mobileL' : 'mobile';
      } else if (num > 400 && num < 601) {
         size = size === 'mobileL' ? 'pad' : 'mobileL';
      } else if (num > 600 && num < 801) {
         size = size === 'pad' ? 'notebook' : 'pad';
      } else if (num > 800 && num < 1201) {
         size = size === 'notebook' ? 'desktop' : 'notebook';
      } else {
         size = 'desktop';
      }

      setDevice(size);
   }, [size]);

   useEffect(() => {
      if (!device) handler();

      points.forEach((num) => window.matchMedia(`(min-width: ${num}px)`).addEventListener('change', handler));
      return () => {
         points.forEach((num) =>
            window.matchMedia(`(min-width: ${num}px)`).removeEventListener('change', handler),
         );
      };
   }, []);

   // используем useMemo, чтобы при рендере не создавать новый а возвращать старый объект
   // если из массива зависимостей ничего не изменилось
   const defaultProps = useMemo(
      () => ({
         device,
      }),
      [device],
   );

   return <ResizeContext.Provider value={defaultProps}>{children}</ResizeContext.Provider>;
};

export default ResizeProvider;
