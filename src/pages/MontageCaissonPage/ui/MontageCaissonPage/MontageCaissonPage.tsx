import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './MontageCaissonPage.module.scss';
import { Page } from '@/widgets/Page';
import { MontageTitleComponent } from '../MontageTitleComponent/MontageTitleComponent';
import { StagesComponent } from '../StagesComponent/StagesComponent';
import { ListQualitiesComponent } from '@/widgets/ListQualitiesComponent';
import { fourReasons } from '@/shared/const/qualities/four-reasons';
import { AdviceEngineerComponent } from '@/widgets/AdviceEngineerComponent';
import { MontageCaissonInfo } from '../MontageCaissonInfo/MontageCaissonInfo';

export interface MontageCaissonPageProps {
   className?: string;
}

const MontageCaissonPage = memo((props: MontageCaissonPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.MontageCaissonPage, {}, [className])}>
         <MontageTitleComponent />
         <StagesComponent />
         <ListQualitiesComponent data={fourReasons} />
         <MontageCaissonInfo />
         <AdviceEngineerComponent />
      </Page>
   );
});

export default MontageCaissonPage;
