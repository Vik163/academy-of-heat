import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './AboutPage.module.scss';
import { Page } from '@/widgets/Page';
import { TitleComponent } from '@/widgets/TitleComponent/TitleComponent';
import { AboutVideoComponent } from '../AboutVideoComponent/AboutVideoComponent';
import { EquipmentComponent } from '@/widgets/EquipmentComponent';
import { AdviceEngineerComponent } from '@/widgets/AdviceEngineerComponent';
import { NumInfoComponent } from '../NumInfoComponent/NumInfoComponent';
import { SignComponent } from '../SignComponent/SignComponent';

export interface AboutPageProps {
   className?: string;
}

const AboutPage = memo((props: AboutPageProps) => {
   const { className } = props;
   const titleContent = {
      crumbs: 'О компании',
      title: 'О компании - ТМ «ЗЕМЛЯК»',
   };

   return (
      <Page className={classNames(cls.AboutPage, {}, [className])}>
         <TitleComponent content={titleContent} />
         <AboutVideoComponent />
         <NumInfoComponent />
         <EquipmentComponent />
         <AdviceEngineerComponent />
         <SignComponent />
      </Page>
   );
});

export default AboutPage;
