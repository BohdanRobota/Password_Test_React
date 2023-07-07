import React, { useEffect } from 'react';
import './PasswordTest.css';
import { Input, Container, Box, Text } from '@chakra-ui/react';
import { usePasswordComplexity } from '../../hook/usePasswordComplexity';
import { useColorField } from '../../hook/useColorField';
import useInput from '../../hook/useInput';

function PasswordTest() {
  const [password, passwordHandler] = useInput('');
  const [passComplexity, setCurrentComplexity] = usePasswordComplexity();
  const [fieldsColors, setAllColors] = useColorField();

  useEffect(() => {
    setCurrentComplexity(password);
  }, [password]);

  useEffect(() => {
    setAllColors(passComplexity);
  }, [passComplexity]);

  return (
    <Container className="container">
      <Input value={password} onChange={passwordHandler} type="password" placeholder="password" className="inputBox" />
      <Text className="field" color={'grey'}>
        {'Password is ' + passComplexity}
      </Text>
      <Box className="field" bg={fieldsColors.easy}>
        Easy Password
      </Box>
      <Box className="field" bg={fieldsColors.medium}>
        Medium password
      </Box>
      <Box className="field" bg={fieldsColors.strong}>
        Strong password
      </Box>
    </Container>
  );
}

export default PasswordTest;
