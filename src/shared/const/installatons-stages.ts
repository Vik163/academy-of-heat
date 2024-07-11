import etap1 from '@/shared/assets/images/etapy-1.png';
import etap2 from '@/shared/assets/images/etapy-2.png';
import etap3 from '@/shared/assets/images/etapy-3.png';
import etap4 from '@/shared/assets/images/etapy-4.png';
import etap5 from '@/shared/assets/images/etapy-5.png';
import etap6 from '@/shared/assets/images/etapy-6.png';

export const stages = [
   {
      stage: '1 этап',
      stageName: 'Роем котлован',
      description: 'Котлован должен быть на 250 мм шире кессона с каждой стороны.',
      image: etap1,
   },
   {
      stage: '2 этап',
      stageName: 'Выравниваем дно котлована с помощью смеси песка и цемента',
      description:
         'Пескоцементная засыпка производится с обязательным трамбованием. Толщина слоя не менее 100 мм.',
      image: etap2,
   },
   {
      stage: '3 этап',
      stageName: 'Обрезаем обсадную трубу и устанавливаем кессон',
      description: 'Важно обеспечить полную герметичность ввода обсадной трубы в кессон.',
      image: etap3,
   },
   {
      stage: '4 этап',
      stageName: 'Проводим обратную обсыпку кессона смесью песка и цемента с утрамбовкой',
      description: 'Для предупреждения деформации и всплытия кессона.',
      image: etap4,
   },
   {
      stage: '5 этап',
      stageName: 'Устанавливаем надёжное оборудование',
      description: 'Которое обеспечит автоматическое водоснабжение и комфортную эксплуатацию скважины.',
      image: etap5,
   },
   {
      stage: '6 этап',
      stageName: 'Получите прозрачный расчёт стоимости монтажа',
      description:
         'Которая будет закреплена в договоре, без скрытых платежей. С Вами свяжется наш менеджер и сделает подробный расчёт.',
      image: etap6,
   },
];
