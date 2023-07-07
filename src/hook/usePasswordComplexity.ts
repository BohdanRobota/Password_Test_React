import React, { useState } from 'react'
import { complexityEnum } from '../enum/passwordTest.enum';

export const usePasswordComplexity = (): [complexityEnum, Function] => {
  const [passComplexity, setPassComplexity] = useState(complexityEnum.EMPTY);

  function setCurrentComplexity(password: string) {
    checkIsEmpty(password);
    checkEasy(password);
    checkMedium(password);
    checkStrong(password);
  }

  function checkIsEmpty(password: string) {
    if (password.length === 0) {
      setPassComplexity(complexityEnum.EMPTY);
    } else {
      setPassComplexity(complexityEnum.INVALID);
    }
  }

  function checkStrong(password: string) {
    const result = password.match(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[^\w]).{8,}/);
    if (result) setPassComplexity(complexityEnum.STRONG);
  }

  function checkEasy(password: string) {
    const result = password.match(/^.{8,}/);
    if (result) setPassComplexity(complexityEnum.EASY);
  }

  function checkMedium(password: string) {
    const result =
      password.match(/^(?=.*[A-Za-z])(?=.*[0-9]).{8,}/) ||
      password.match(/^(?=.*[A-Za-z])(?=.*[^\w]).{8,}/) ||
      password.match(/^(?=.*[0-9])(?=.*[^\w]).{8,}/);
    if (result) setPassComplexity(complexityEnum.MEDIUM);
  }

  return [passComplexity, setCurrentComplexity];
}
