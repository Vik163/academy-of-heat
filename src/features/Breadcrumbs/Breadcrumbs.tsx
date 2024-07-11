import React from 'react';
import { useLocation } from 'react-router-dom';

import cls from './Breadcrumbs.module.scss';

import SlashImg from '@/shared/assets/icons/icon-separator.svg';
import { Icon } from '@/shared/ui/Icon';
import { AppLink } from '@/shared/ui/AppLink';
import { breadcrumbsLink } from '@/shared/const/breadcrumbs';
import { classNames } from '@/shared/lib/classNames/classNames';

interface BreadcrumbProps {
   className?: string;
   productName?: string;
}

export const Breadcrumb = (props: BreadcrumbProps) => {
   const { className, productName } = props;
   const location = useLocation();

   const arr = location.pathname.split('/').map((i) => {
      let item = i;
      if (item === 'product') {
         item = 'catalog';
      }
      return item;
   });

   return (
      <ul className={classNames(cls.Breadcrumbs, {}, [className])}>
         {arr.map((path, i) => (
            <li key={path} className={cls.linkContainer}>
               <AppLink to={`/${path}`} className={cls.link}>
                  {breadcrumbsLink[path] || productName}
               </AppLink>
               {arr.length !== i + 1 && <Icon Svg={SlashImg} className={cls.icon} />}
            </li>
         ))}
      </ul>
   );
};
