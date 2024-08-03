import { memo } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/shared/assets/icons/favicon_1.png';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Logo.module.scss';
import { getRouteMain } from '@/shared/const/router';
import { useResize } from '@/shared/lib/hooks/useResize';
import { Icon } from '../Icon';
import { HStack } from '../Stack';

interface LogoProps {
   className?: string;
}

export const Logo = memo((props: LogoProps) => {
   const { className } = props;
   const { isMobile } = useResize();

   return (
      <Link to={getRouteMain()} className={classNames(cls.logo, { [cls.mobile]: isMobile }, [className])}>
         <HStack gap={10}>
            <Icon src={logo} className={cls.logoImage} />
            ИНЖЕНЕРНЫЙ ЦЕНТР
         </HStack>
         <span className={classNames(cls.logoName, { [cls.mobile]: isMobile }, [])}>АКАДЕМИЯ ТЕПЛА</span>
      </Link>
   );
});
