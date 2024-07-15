import { memo } from 'react';

import cls from './MainPage.module.scss';
import { Page } from '@/widgets/Page';
import { TitleComponent } from '../TitleComponent/TitleComponent';
import { EquipmentComponent } from '../../../../widgets/EquipmentComponent/EquipmentComponent';
import { CatalogComponent } from '@/widgets/CatalogComponent';
import { MontageComponent } from '../MontageComponent/MontageComponent';
import { ModelList } from '../ModelList/ModelList';
import { InfoComponent } from '../InfoComponent/InfoComponent';
import { ListQualitiesComponent } from '@/widgets/ListQualitiesComponent';
import { bestDecisions } from '@/shared/const/qualities/best-decisions-main';
import { classNames } from '@/shared/lib/classNames/classNames';

export const MainPage = memo(() => {
   return (
      <Page className={classNames(cls.MainPage, {}, [cls.page])}>
         <TitleComponent />
         <EquipmentComponent />
         <CatalogComponent />
         <ListQualitiesComponent data={bestDecisions} />
         <MontageComponent />
         <ModelList />
         <InfoComponent />
      </Page>
   );
});
