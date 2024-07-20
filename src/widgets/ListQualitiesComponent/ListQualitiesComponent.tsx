import { memo } from 'react';
import { HeaderTagType, Text } from '@/shared/ui/Text';

import cls from './ListQualitiesComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { FlexAlign, FlexWrap } from '@/shared/ui/Stack/Flex';

interface Data {
   title: string;
   subtitle: string;
   items: {
      itemTitle: string;
      itemImage: string;
      itemDescription: string;
   }[];
}

interface ListQualitiesComponentProps {
   data: Data;
}

export const ListQualitiesComponent = memo((props: ListQualitiesComponentProps) => {
   const { data } = props;

   return (
      <article id='sec-garantii' className={cls.garantii}>
         <div className={cls.container}>
            <Text title={HeaderTagType.H_3} className={classNames(cls.title, {}, [])}>
               {data.title}
            </Text>
            <Text className={classNames(cls.description, {}, [])}>{data.subtitle}</Text>
            <VStack wrap={FlexWrap.WPAP} className={cls.garantii_block} align={FlexAlign.START}>
               {data.items.map((item) => (
                  <div key={item.itemTitle} className={cls.garantii_block_list_item}>
                     <div className={cls.garantii_block_list_image}>
                        <img src={item.itemImage} alt={item.itemTitle} />
                     </div>
                     <Text title={HeaderTagType.H_4} className={cls.garantii_block_list_title}>
                        {item.itemTitle}
                     </Text>
                     <Text className={cls.garantii_block_list_description}>{item.itemDescription}</Text>
                  </div>
               ))}
            </VStack>
         </div>
      </article>
   );
});
