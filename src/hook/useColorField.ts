import React, { useState } from 'react'
import { complexityEnum } from '../enum/passwordTest.enum';
import { colorsEnum } from '../enum/passwordTest.enum';
import { IFieldsColors } from '../type/types';



export const useColorField = (): [IFieldsColors, Function] => {
  const [fieldsColors, setFieldsColors] = useState<IFieldsColors>({
    easy: colorsEnum.GREY,
    medium: colorsEnum.GREY,
    strong: colorsEnum.GREY
  });

  function setAllColors(passComplexity: string) {
    switch (passComplexity) {
      case complexityEnum.INVALID:
        setFieldsColors({
          easy: colorsEnum.RED,
          medium: colorsEnum.RED,
          strong: colorsEnum.RED
        })
        return fieldsColors;
      case complexityEnum.EASY:
        setFieldsColors({
          easy: colorsEnum.RED,
          medium: colorsEnum.GREY,
          strong: colorsEnum.GREY
        })
        return fieldsColors;
      case complexityEnum.MEDIUM:
        setFieldsColors({
          easy: colorsEnum.YELLOW,
          medium: colorsEnum.YELLOW,
          strong: colorsEnum.GREY
        })
        return fieldsColors;
      case complexityEnum.STRONG:
        setFieldsColors({
          easy: colorsEnum.GREEN,
          medium: colorsEnum.GREEN,
          strong: colorsEnum.GREEN
        })
        return fieldsColors;
      default:
        setFieldsColors({
          easy: colorsEnum.GREY,
          medium: colorsEnum.GREY,
          strong: colorsEnum.GREY
        })
        return fieldsColors;
    }
  }

  return [fieldsColors, setAllColors]

}
