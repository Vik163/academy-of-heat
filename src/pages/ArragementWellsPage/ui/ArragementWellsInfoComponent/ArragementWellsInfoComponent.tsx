import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './ArragementWellsInfoComponent.module.scss';

import { HStack } from '@/shared/ui/Stack';
import { Text, FontSize, HeaderTagType, FontWeight, FontColor } from '@/shared/ui/Text';
import { FlexAlign } from '@/shared/ui/Stack/Flex';

export const ArragementWellsInfoComponent = memo(() => {
   return (
      <div className={cls.ArragementWellsInfoComponent}>
         <HStack className={cls.container} align={FlexAlign.START}>
            <div className={cls.info}>
               <Text title={HeaderTagType.H_2} fontWeight={FontWeight.TEXT_700} className={cls.mainTitle}>
                  От чего зависит стоимость обустройства скважины на воду
               </Text>
               <p>
                  Во всех регионах жители сталкиваются с проблемой водоснабжения и канализации. Особенно это
                  касается владельцев частных домов и не всегда возможно подключиться к центральной системе и
                  получить необходимое количество воды. В таких случаях, обустройство скважины на воду может
                  стать оптимальным решением. Но сколько это будет стоить данная процедура?
               </p>
               <p>
                  Один из основных видов работ, связанных с обустройством скважины, это бурение. Бурение
                  скважин осуществляется специализированными компаниями, имеющими все необходимое
                  оборудование. Стоимость бурения скважины зависит от нескольких факторов, включая глубину и
                  диаметр скважины. Обычно, бурение одного метра скважины стоит около 2800-3200 рублей. Таким
                  образом, бурение скважины глубиной 30 метров обойдется в районе 60-80 тысяч рублей.
               </p>
               <p>
                  После того, как скважина будет пробурена, необходимо установить насос для подачи воды.
                  Стоимость установки насоса зависит от его мощности, режимов работы и производителя. Mожно
                  найти насосы различных ценовых категорий, начиная от 5-10 тысяч рублей за базовую модель.
                  Также на сайте нашей компании ЗЕМЛЯК можно посмотреть услуги по установке насоса. Эти услуги
                  обычно включены в стоимость обустройства скважины, но иногда возможны дополнительные расходы
                  на покупку дополнительного оборудования, например, адаптеров для подключения насоса.
               </p>
               <p>
                  Также, при обустройстве скважины на воду может потребоваться ремонт или замена трубопроводов
                  для водоснабжения и канализации. Стоимость таких работ трудно определить заранее, так как
                  она зависит от состояния существующих труб и объема необходимых работ, но обычно расходы на
                  этапе обустройства скважины на воду включают и такие работы.
               </p>
               <p>
                  Важным моментом при обустройстве скважины является чистка скважины и настройка автоматики.
                  Цена данных работ зависит от сложности и объема работ, а также от специфики каждой
                  конкретной компании. Обязательным этапом является проверка качества воды и ее подготовка для
                  дальнейшего использования.
               </p>
               <p>
                  Таким образом, обустройство скважины на воду включает в себя работу по бурению, установке
                  насоса, возможно ремонт или замену трубопроводов, а также чистку и настройку автоматики.
                  Стоимость данных работ зависит от множества факторов, поэтому лучше обратиться к
                  специалистам нашей компании, чтобы получить точные расчеты и консультацию. Необходимо также
                  помнить, что после обустройства скважины, ее использование потребует дополнительных расходов
                  на обслуживание и эксплуатацию.
               </p>
               <Text
                  title={HeaderTagType.H_3}
                  fontSize={FontSize.SIZE_20}
                  fontWeight={FontWeight.TEXT_600}
                  fontColor={FontColor.LIGHT_GREY}
                  className={cls.title}
               >
                  Преимущества заказа обустройства скважины на воду в компании «ЗЕМЛЯК»
               </Text>
               <p>
                  Обустройство скважины на воду является важным этапом, особенно для тех, кто хочет получить
                  надежный и постоянный источник питьевой воды. Заказ обустройства скважины у профессиональной
                  компании может предоставить множество преимуществ, и в этой статье мы рассмотрим, почему
                  именно наша компания является лучшим выбором для выполнения данной задачи.
               </p>
               <ul className={cls.list}>
                  <li>
                     &ensp;Первое преимущество заказа обустройства скважины в нашей компании — это опыт и
                     профессионализм наших специалистов. Мы работаем на рынке более 10 лет и имеем широкий
                     опыт в обустройстве скважин на воду. Наши специалисты обладают необходимыми знаниями и
                     навыками для выполнения данной задачи на высоком уровне. Мы используем современное
                     оборудование и профессиональные инструменты, что позволяет нам обеспечивать высокое
                     качество работ.
                  </li>
                  <li>
                     &ensp;Второе преимущество — это индивидуальный подход к каждому клиенту. Мы понимаем, что
                     каждая скважина уникальна, поэтому мы проводим предварительное изучение местности и
                     выявляем особенности грунта и гидрогеологической ситуации. Это позволяет нам выбрать
                     наиболее эффективные методы обустройства скважины и гарантировать ее долговечность и
                     надежность.
                  </li>
                  <li>
                     &ensp;Третье преимущество — это наличие всех необходимых разрешений и лицензий. Мы
                     полностью соответствуем требованиям законодательства и имеем все необходимые документы
                     для выполнения обустройства скважины на воду. Это гарантирует нашим клиентам безопасность
                     и защиту их интересов.
                  </li>
                  <li>
                     &ensp;Еще одно преимущество нашей компании — это доступные цены и гибкая система оплаты.
                     Мы предлагаем конкурентные цены на наши услуги, что делает обустройство скважины на воду
                     доступным для всех желающих. Кроме того, мы предлагаем гибкую систему оплаты, что
                     позволяет нашим клиентам выбрать наиболее удобный для них вариант оплаты.
                  </li>
               </ul>
               <p>
                  И последнее преимущество заказа обустройства скважины в нашей компании — это гарантия
                  качества наших работ. Мы предоставляем гарантию на все выполненные работы, что позволяет
                  нашим клиентам быть уверенными в надежности и безопасности своей скважины. Кроме того, в
                  случае возникновения проблем или неисправностей, наши специалисты оперативно реагируют и
                  оказывают необходимую помощь.
               </p>
               <p>
                  В заключение, заказ обустройства скважины на воду в нашей компании предоставляет ряд
                  существенных преимуществ. Мы предлагаем опытных и квалифицированных специалистов,
                  индивидуальный подход к каждому клиенту, наличие всех необходимых разрешений и лицензий,
                  доступные цены и гибкую систему оплаты, а также гарантию качества наших работ. Если вы
                  решите обустроить скважину на воду, наша компания — лучший выбор для этого.
               </p>
            </div>
            <div className={cls.advantages}>
               <Text title={HeaderTagType.H_3} fontSize={FontSize.SIZE_16} fontWeight={FontWeight.TEXT_700}>
                  Факторы, влияющие на стоимость обустройства скважины на воду
               </Text>
               <p>
                  Стоимость обустройства скважины на воду может значительно различаться в зависимости от
                  различных факторов. Однако, в общих чертах, обустройство скважины включает в себя следующие
                  компоненты и работы:
               </p>
               <ul className={classNames(cls.list, {}, [cls.listMargin])}>
                  <li className={cls.imageStyle}>
                     &ensp;Бурение скважины. Для этого используются специальные буровые установки и
                     оборудование. Стоимость бурения будет зависеть от глубины скважины, диаметра и типа
                     скважины (артезианская, глубокий песок и т.д.).
                  </li>
                  <li className={cls.imageStyle}>
                     &ensp;Монтаж оборудования. Включает установку и подключение автоматики, блока управления,
                     гидроаккумулятора и других комплектующих элементов.
                  </li>
                  <li className={cls.imageStyle}>
                     &ensp;Водоочистка. Для обеспечения чистой воды, может потребоваться установка системы
                     водоочистки.
                  </li>
                  <li className={cls.imageStyle}>
                     &ensp;Прокладка кабеля и соединение с электросетью. Для работы скважины необходимо
                     электропитание, поэтому требуется прокладка кабеля до дома или другого объекта.
                  </li>
                  <li className={cls.imageStyle}>
                     &ensp;Создание траншеи и прокладка трубопровода. Чтобы вода из скважины попадала в дом
                     или другой объект, необходимо проложить трубопровод. Установка и подключение кранов, реле
                     и других элементов управления.
                  </li>
                  <li className={cls.imageStyle}>
                     &ensp;Запуск и наладка системы. После завершения всех работ, производится запуск системы
                     и ее настройка, чтобы обеспечить надлежащую работу и поддерживать необходимое давление в
                     системе.
                  </li>
                  <li className={cls.imageStyle}>
                     &ensp;В зависимости от размеров участка, требований заказчика и технических особенностей,
                     стоимость обустройства скважины может варьироваться от нескольких тысяч до нескольких
                     десятков тысяч рублей. Точную смету и перечень работ, а также оценку стоимости, лучше
                     обсудить с специалистом перед началом проекта.
                  </li>
                  <li className={cls.imageStyle}>
                     &ensp;Обустройство скважины на воду является важным мероприятием, особенно для дачных или
                     загородных домов, где необходима автономная система водоснабжения. Это позволяет быть
                     независимыми от центрального водопровода и обеспечивает постоянный доступ к чистой воде.
                     Кроме того, оно может быть необходимо и для промышленных объектов.
                  </li>
               </ul>
               <p>
                  Важно учесть, что стоимость обустройства скважины может быть дополнена другими затратами.
                  Например, на оголовок скважины, монтаж опалубка, якорение. Технология и толщина
                  металлической трубы, используемой для обустройства скважины, также будут влиять на стоимость
                  проекта.
               </p>
               <p>
                  Если вы рассматриваете обустройство скважины на воду, рекомендуется обратиться к
                  специалистам, которые смогут предоставить всю необходимую информацию, ответить на ваши
                  вопросы и составить смету для вашего конкретного случая. Позвоните нам по номеру, чтобы
                  сделать предварительный заказ
               </p>
            </div>
         </HStack>
      </div>
   );
});
