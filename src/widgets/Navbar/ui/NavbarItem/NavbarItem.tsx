import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NavbarItem.module.scss';
import { AppLink } from '@/shared/ui/AppLink';
import type { NavbarItemType } from '../../model/types/navbar';
import { Button, ButtonRadius } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import arrow from '@/shared/assets/icons/icon-arrow-top.svg';

interface NavbarItemProps {
   item: NavbarItemType;
   addLinks?: (text: string) => void;
   isAddLinks?: boolean;
}

export const NavbarItem = memo(({ item, addLinks, isAddLinks }: NavbarItemProps) => {
   return (
      <div className={cls.NavbarItem}>
         {!item.path && (
            <Button
               onClick={addLinks && (() => addLinks(item.text))}
               radius={ButtonRadius.RADIUS_NONE}
               className={classNames(cls.item, {}, [cls.linkButton])}
            >
               <span className={cls.link}>{item.text}</span>
               <Icon className={classNames(cls.arrow, { [cls.arrowActive]: isAddLinks }, [])} Svg={arrow} />
            </Button>
         )}
         {item.path && (
            <AppLink
               to={item.path}
               className={classNames(cls.item, {
                  // [cls.collapsed]: collapsed,
                  [cls.nested]: item.nested,
               })}
               activeClassName={cls.active}
            >
               {/* <Icon Svg={item.Icon} /> */}
               <span className={cls.link}>{item.text}</span>
            </AppLink>
         )}
      </div>
   );
});
