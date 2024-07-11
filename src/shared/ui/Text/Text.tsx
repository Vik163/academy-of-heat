import { type ReactNode, memo } from 'react';
import CSS from 'csstype';
import { classNames } from '../../lib/classNames/classNames';

import cls from './Text.module.scss';

export enum FontColor {
   GREEN = 'text_green',
   BLACK = 'text_black',
   YELLOW = 'text_yellow',
   BUTTON = 'text_button',
   WHITE = 'text_white',
   RED = 'text_red',
   LIGHT_GREY = 'text_light-grey',
   TEXT_PRIMARY = 'text_text',
}
export enum TextAlign {
   LEFT = 'left',
   CENTER = 'center',
   RIGHT = 'right',
}
export enum FontWeight {
   TEXT_400 = 'normal',
   TEXT_500 = 'middle',
   TEXT_600 = 'semibold',
   TEXT_700 = 'bold',
   TEXT_900 = 'extrabold',
}
export enum FontSize {
   SIZE_44 = 'size_44',
   SIZE_36 = 'size_36',
   SIZE_34 = 'size_34',
   SIZE_32 = 'size_32',
   SIZE_30 = 'size_30',
   SIZE_24 = 'size_24',
   SIZE_20 = 'size_20',
   SIZE_38 = 'size_38',
   SIZE_26 = 'size_26',
   SIZE_22 = 'size_22',
   SIZE_19 = 'size_19',
   SIZE_18 = 'size_18',
   SIZE_17 = 'size_17',
   SIZE_16 = 'size_16',
   SIZE_15 = 'size_15',
   SIZE_14 = 'size_14',
   SIZE_13 = 'size_13',
   SIZE_12 = 'size_12',
   SIZE_11 = 'size_11',
   SIZE_10 = 'size_10',
}

export enum HeaderTagType {
   H_1 = 'h1',
   H_2 = 'h2',
   H_3 = 'h3',
   H_4 = 'h4',
}

interface TextProps {
   style?: CSS.Properties;
   className?: string;
   title?: HeaderTagType;
   fontWeight?: FontWeight;
   align?: TextAlign;
   fontColor?: FontColor;
   fontSize?: FontSize;
   children: ReactNode;
   max?: boolean;
}

const mapSizeToClass: Record<FontSize, string> = {
   size_44: cls.size_44,
   size_38: cls.size_38,
   size_36: cls.size_36,
   size_34: cls.size_34,
   size_32: cls.size_32,
   size_30: cls.size_30,
   size_26: cls.size_26,
   size_24: cls.size_24,
   size_22: cls.size_22,
   size_20: cls.size_20,
   size_19: cls.size_19,
   size_18: cls.size_18,
   size_17: cls.size_17,
   size_16: cls.size_16,
   size_15: cls.size_15,
   size_14: cls.size_14,
   size_13: cls.size_13,
   size_12: cls.size_12,
   size_11: cls.size_11,
   size_10: cls.size_10,
};

export const Text = memo((props: TextProps) => {
   const {
      className,
      title,
      fontWeight = FontWeight.TEXT_400,
      align = TextAlign.LEFT,
      fontColor = FontColor.TEXT_PRIMARY,
      fontSize = FontSize.SIZE_14,
      max,
      style,
      children,
   } = props;

   const HeaderTag = title || 'p';

   const sizeClass = mapSizeToClass[fontSize];
   const additionalClasses = [
      className,
      cls[fontColor],
      cls[align],
      cls[fontWeight],
      sizeClass,
   ];

   return (
      <HeaderTag
         className={classNames(cls.text, { [cls.max]: max }, additionalClasses)}
         style={style}
      >
         {children}
      </HeaderTag>
   );
});
