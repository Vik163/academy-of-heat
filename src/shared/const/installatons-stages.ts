import etap1 from '@/shared/assets/images/desk/etapy-1.png';
import etap2 from '@/shared/assets/images/desk/etapy-2.png';
import etap3 from '@/shared/assets/images/desk/etapy-3.png';
import etap4 from '@/shared/assets/images/desk/etapy-4.png';
import etap5 from '@/shared/assets/images/desk/etapy-5.png';
import etap6 from '@/shared/assets/images/desk/etapy-6.png';
import etapMob1 from '@/shared/assets/images/mob/etapy-1.png';
import etapMob2 from '@/shared/assets/images/mob/etapy-2.png';
import etapMob3 from '@/shared/assets/images/mob/etapy-3.png';
import etapMob4 from '@/shared/assets/images/mob/etapy-4.png';
import etapMob5 from '@/shared/assets/images/mob/etapy-5.png';
import etapMob6 from '@/shared/assets/images/mob/etapy-6.png';

export const stages = [
   {
      stage: '1 этап',
      stageName: 'Роем котлован',
      description: 'Котлован должен быть на 250 мм шире кессона с каждой стороны.',
      image: etap1,
      imageMob: etapMob1,
   },
   {
      stage: '2 этап',
      stageName: 'Выравниваем дно котлована с помощью смеси песка и цемента',
      description:
         'Пескоцементная засыпка производится с обязательным трамбованием. Толщина слоя не менее 100 мм.',
      image: etap2,
      imageMob: etapMob2,
   },
   {
      stage: '3 этап',
      stageName: 'Обрезаем обсадную трубу и устанавливаем кессон',
      description: 'Важно обеспечить полную герметичность ввода обсадной трубы в кессон.',
      image: etap3,
      imageMob: etapMob3,
   },
   {
      stage: '4 этап',
      stageName: 'Проводим обратную обсыпку кессона смесью песка и цемента с утрамбовкой',
      description: 'Для предупреждения деформации и всплытия кессона.',
      image: etap4,
      imageMob: etapMob4,
   },
   {
      stage: '5 этап',
      stageName: 'Устанавливаем надёжное оборудование',
      description: 'Которое обеспечит автоматическое водоснабжение и комфортную эксплуатацию скважины.',
      image: etap5,
      imageMob: etapMob5,
   },
   {
      stage: '6 этап',
      stageName: 'Получите прозрачный расчёт стоимости монтажа',
      description:
         'Которая будет закреплена в договоре, без скрытых платежей. С Вами свяжется наш менеджер и сделает подробный расчёт.',
      image: etap6,
      imageMob: etapMob6,
   },
];
