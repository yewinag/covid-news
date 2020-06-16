/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { Container } from 'native-base';

import HeaderPage from './components/HeaderPage';
import Home from './components/Home';
import FooterPage from './components/FooterPage';

const App = () => {
  return (
    <Container>
      <HeaderPage />
      <Home />
      <FooterPage />
    </Container>
  );
};
export default App;
