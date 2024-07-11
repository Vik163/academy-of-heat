import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Logo.module.scss';
import { getRouteMain } from '@/shared/const/router';
import { useResize } from '@/shared/lib/hooks/useResize';

interface LogoProps {
   className?: string;
}

export const Logo = memo((props: LogoProps) => {
   const { className } = props;
   const { isMobile } = useResize();

   return (
      <Link to={getRouteMain()} className={classNames(cls.logo, { [cls.mobile]: isMobile }, [className])}>
         ИНЖЕНЕРНЫЙ ЦЕНТР
         <span className={classNames(cls.logoName, { [cls.mobile]: isMobile }, [])}>АКАДЕМИЯ ТЕПЛА</span>
      </Link>
   );
});
