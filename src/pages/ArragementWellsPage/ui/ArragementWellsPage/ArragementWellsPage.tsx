import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArragementWellsPage.module.scss';
import { Page } from '@/widgets/Page';
import { ArragementTitleComponent } from '../ArragementTitleComponent/ArragementTitleComponent';
import { ListQualitiesComponent } from '@/widgets/ListQualitiesComponent';
import { bestDecisionsWells } from '@/shared/const/qualities/best-decisions-wells';
import { AdviceEngineerComponent } from '@/widgets/AdviceEngineerComponent';
import { ArragementWellsInfoComponent } from '../ArragementWellsInfoComponent/ArragementWellsInfoComponent';

export interface ArragementWellsPageProps {
   className?: string;
}

const ArragementWellsPage = memo((props: ArragementWellsPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.ArragementWellsPage, {}, [className])}>
         <ArragementTitleComponent />
         <ListQualitiesComponent data={bestDecisionsWells} wellsStyle />
         <AdviceEngineerComponent />
         <ArragementWellsInfoComponent />
      </Page>
   );
});

export default ArragementWellsPage;
