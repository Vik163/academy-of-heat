import { type ReactNode, memo } from 'react';
import { type LinkProps, NavLink, useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
   className?: string;
   activeClassName?: string;
   children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
   const { className, to, activeClassName = '', children, ...otherProps } = props;
   const location = useLocation();

   return (
      <NavLink
         to={to}
         state={location.pathname}
         className={({ isActive }) => classNames(cls.AppLink, { [activeClassName]: isActive }, [className])}
         {...otherProps}
      >
         {children}
      </NavLink>
   );
});
