import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './CatalogPage.module.scss';
import { Page } from '@/widgets/Page';
import { CatalogComponent } from '@/widgets/CatalogComponent';
import { AdviceEngineerComponent } from '@/widgets/AdviceEngineerComponent';
import { CatalogInfo } from '../CatalogInfo/CatalogInfo';

export interface CatalogPageProps {
   className?: string;
}

const CatalogPage = memo((props: CatalogPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.CatalogPage, {}, [className])}>
         <CatalogComponent />
         <AdviceEngineerComponent />
         <CatalogInfo />
      </Page>
   );
});

export default CatalogPage;
