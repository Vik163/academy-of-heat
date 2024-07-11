import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './QuestionsPage.module.scss';
import { Page } from '@/widgets/Page';
import { Breadcrumb } from '@/features/Breadcrumbs';
import { FontSize, FontWeight, HeaderTagType, Text } from '@/shared/ui/Text';
import { questions } from '@/shared/const/questions';
import arrow from '@/shared/assets/icons/icon-arrow-top.svg';
import { Icon } from '@/shared/ui/Icon';
import { HStack } from '@/shared/ui/Stack';

export interface QuestionsPageProps {
   className?: string;
}

const QuestionsPage = memo((props: QuestionsPageProps) => {
   const { className } = props;
   const [isActive, setIsActive] = useState('');

   const onToggle = (question: string) => {
      setIsActive(question === isActive ? '' : question);
   };

   const questionsBlock = questions.map((item) => (
      <div key={item.question}>
         <HStack className={cls.questionBlock} onClick={() => onToggle(item.question)} gap={20}>
            <Icon
               className={classNames(cls.arrow, { [cls.arrowActive]: isActive === item.question }, [])}
               Svg={arrow}
            />
            <Text title={HeaderTagType.H_4} className={cls.question}>
               {item.question}
            </Text>
         </HStack>
         {isActive === item.question &&
            (typeof item.answer === 'string' ? (
               <Text fontSize={FontSize.SIZE_15} className={cls.description}>
                  {item.answer}
               </Text>
            ) : (
               item.answer.map((str) => (
                  <Text key={str} fontSize={FontSize.SIZE_15} className={cls.descriptionList}>
                     {str}
                  </Text>
               ))
            ))}
      </div>
   ));

   return (
      <Page className={classNames(cls.QuestionsPage, {}, [className])}>
         <div className={cls.container}>
            <Breadcrumb productName='Вопрос-ответ' />
            <Text
               className={cls.title}
               title={HeaderTagType.H_2}
               fontSize={FontSize.SIZE_36}
               fontWeight={FontWeight.TEXT_700}
            >
               Вопрос-ответ
            </Text>
            <div className={cls.questionsContainer}>
               <Text
                  title={HeaderTagType.H_3}
                  className={cls.subtitle}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_600}
               >
                  Общая категория
               </Text>
               {questionsBlock}
            </div>
         </div>
      </Page>
   );
});

export default QuestionsPage;
