import React, { useEffect, useState } from 'react';
import './PasswordTest.css';
import { Input, Container, Box, Text } from '@chakra-ui/react';
import { complexityEnum, colorsEnum } from '../../enum/passwordTest.enum';

function PasswordTest() {
  const [password, setPassword] = useState('');
  const [passComplexity, setPassComplexity] = useState(complexityEnum.EMPTY);
  const [easyFieldColor, setEasyFieldColor] = useState(colorsEnum.GREY);
  const [mediumFieldColor, setMediumFieldColor] = useState(colorsEnum.GREY);
  const [strongFieldColor, setStrongFieldColor] = useState(colorsEnum.GREY);

  function passwordHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    currentComplexity(event.target.value);
  }

  function currentComplexity(password: string) {
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

  useEffect(() => {
    setColorField();
  }, [passComplexity]);

  function setColorField() {
    switch (passComplexity) {
      case complexityEnum.INVALID:
        setEasyFieldColor(colorsEnum.RED);
        setMediumFieldColor(colorsEnum.RED);
        setStrongFieldColor(colorsEnum.RED);
        return null;
      case complexityEnum.EASY:
        setEasyFieldColor(colorsEnum.RED);
        setMediumFieldColor(colorsEnum.GREY);
        setStrongFieldColor(colorsEnum.GREY);
        return null;
      case complexityEnum.MEDIUM:
        setEasyFieldColor(colorsEnum.YELLOW);
        setMediumFieldColor(colorsEnum.YELLOW);
        setStrongFieldColor(colorsEnum.GREY);
        return null;
      case complexityEnum.STRONG:
        setEasyFieldColor(colorsEnum.GREEN);
        setMediumFieldColor(colorsEnum.GREEN);
        setStrongFieldColor(colorsEnum.GREEN);
        return null;
      default:
        setEasyFieldColor(colorsEnum.GREY);
        setMediumFieldColor(colorsEnum.GREY);
        setStrongFieldColor(colorsEnum.GREY);
        return null;
    }
  }

  return (
    <Container className="container">
      <Input value={password} onChange={passwordHandler} type="password" placeholder="password" className="inputBox" />
      <Text className="field" color={'grey'}>
        {'Password is ' + passComplexity}
      </Text>
      <Box className="field" bg={easyFieldColor}>
        Easy Password
      </Box>
      <Box className="field" bg={mediumFieldColor}>
        Medium password
      </Box>
      <Box className="field" bg={strongFieldColor}>
        Strong password
      </Box>
    </Container>
  );
}

export default PasswordTest;
