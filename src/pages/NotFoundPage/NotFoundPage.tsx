import { memo } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './NotFoundPage.module.scss';
import { Page } from '@/widgets/Page';

interface NotFoundPageProps {
   className?: string;
}

export const NotFoundPage = memo((props: NotFoundPageProps) => {
   const { className } = props;

   return (
      <Page className={classNames(cls.NotFoundPage, {}, [className])}>
         <div className={cls.container}>
            <h2 className={cls.title}>Страница не найдена</h2>
            <Link to='/' className={cls.link}>
               Перейти на главную
            </Link>
         </div>
      </Page>
   );
});
