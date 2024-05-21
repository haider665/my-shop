import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Flex } from 'antd';
import Pagelayout from './components/Pagelayout';

const App: React.FC = () => {
  return (
    // <Flex>
    //   <Button type="primary">Primary Button</Button>
    // </Flex>
    <Pagelayout/>
  );
}

export default App;
