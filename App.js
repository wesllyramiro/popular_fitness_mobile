import React from 'react';
import { YellowBox } from 'react-native';
import Routes from './src/routes';


YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

const App: () => React$Node = () => {
  return <Routes />
};

export default App