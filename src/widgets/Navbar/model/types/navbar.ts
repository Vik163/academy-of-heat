import React from 'react';

interface NavbarItem {
   path?: string;
   text: string;
   Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
   nested?: boolean;
}

export interface NavbarItemType extends NavbarItem {
   addItems?: NavbarItem[];
}
