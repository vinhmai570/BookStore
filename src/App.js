import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

import BaseScreen from './screens/base/index';
import AppNavigation from './navigation/index';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: ...']);

export default function App() {
  return (
      <AppNavigation/>
      
  );
}
