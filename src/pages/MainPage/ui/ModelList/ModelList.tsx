import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ModelList.module.scss';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { caissons } from '@/shared/const/products/caissons';

interface ModelListProps {
   className?: string;
}

export const ModelList = memo((props: ModelListProps) => {
   const { className } = props;

   const rowTable = caissons.map((item) => (
      <tr key={item.title} className={cls.bodyTableText}>
         <td>{item.title.slice(19)}</td>
         <td>{`${item.size} мм`}</td>
         <td>{item.weight}</td>
         <td>Опция</td>
         <td>{item.title.includes('Лонг') ? '+' : '-'}</td>
      </tr>
   ));

   return (
      <article className={classNames(cls.ModelList, {}, [className])}>
         <div className={cls.container}>
            <Text
               title={HeaderTagType.H_3}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
            >
               Модельный ряд кессонов ЗЕМЛЯК
            </Text>
            <div className={cls.tableContainer}>
               <table className={cls.table}>
                  <thead>
                     <tr className={cls.headerTable}>
                        <th scope='col' className={cls.column_1}>
                           Тип изделия
                        </th>
                        <th scope='col' className={cls.column_2}>
                           Габариты
                        </th>
                        <th scope='col' className={cls.column_3}>
                           Вес
                        </th>
                        <th scope='col' className={cls.column_4}>
                           Утеплённая горловина
                        </th>
                        <th scope='col' className={cls.column_5}>
                           Удлинённый корпус
                        </th>
                     </tr>
                  </thead>
                  <tbody>{rowTable}</tbody>
               </table>{' '}
            </div>
         </div>
      </article>
   );
});
