import { memo } from 'react';
import { HeaderTagType, Text } from '@/shared/ui/Text';

import cls from './ListQualitiesComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useResize } from '@/shared/lib/hooks/useResize';

interface Data {
   title: string;
   subtitle: string;
   mainImageDesc: string;
   mainImageMob: string;
   items: {
      itemTitle: string;
      itemImage: string;
      itemDescription: string;
   }[];
}

interface ListQualitiesComponentProps {
   data: Data;
   wellsStyle?: boolean;
}

export const ListQualitiesComponent = memo((props: ListQualitiesComponentProps) => {
   const { data, wellsStyle } = props;
   const { isMobile } = useResize();

   const image = isMobile ? data.mainImageMob : data.mainImageDesc;

   return (
      <article id='sec-garantii' className={cls.garantii}>
         <div className={cls.container}>
            <img
               className={classNames(cls.block_image, { [cls.marginImage]: wellsStyle }, [])}
               src={image}
               alt='инженер'
            />
            <div className={cls.container}>
               <Text
                  title={HeaderTagType.H_3}
                  className={classNames(cls.title, { [cls.marginTitle]: wellsStyle }, [])}
               >
                  {data.title}
               </Text>
               <Text className={classNames(cls.description, { [cls.marginTitle]: wellsStyle }, [])}>
                  {data.subtitle}
               </Text>
               <div className={cls.garantii_block}>
                  <div className={cls.garantii_block_list}>
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
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
});
