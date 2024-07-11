import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ResultsSAWC.module.scss';
import { Page } from '@/widgets/Page';
import { TitleComponent } from '@/widgets/TitleComponent/TitleComponent';
import { ResultsInfoComponent } from '../ResultsInfoComponent/ResultsInfoComponent';

export interface ResultsSAWCProps {
   className?: string;
}

const ResultsSAWC = memo((props: ResultsSAWCProps) => {
   const { className } = props;

   const titleContent = {
      crumbs: 'Результаты СОУТ',
      title: 'Результаты СОУТ - ТМ «ЗЕМЛЯК»',
   };

   return (
      <Page className={classNames(cls.ResultsSAWC, {}, [className])}>
         <TitleComponent content={titleContent} />
         <ResultsInfoComponent />
      </Page>
   );
});

export default ResultsSAWC;
