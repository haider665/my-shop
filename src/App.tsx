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

// import React, { useState } from 'react';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { ConfigProvider, Menu } from 'antd';

// type MenuItem = Required<MenuProps>['items'][number];

// const items: MenuItem[] = [
//   {
//     label: 'Navigation One',
//     key: 'mail',
//     icon: <MailOutlined />,
//   },
//   {
//     label: 'Navigation Two',
//     key: 'app',
//     icon: <AppstoreOutlined />,
//     disabled: true,
//   },
//   {
//     label: 'Navigation Three - Submenu',
//     key: 'SubMenu',
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: 'group',
//         label: 'Item 1',
//         children: [
//           { label: 'Option 1', key: 'setting:1' },
//           { label: 'Option 2', key: 'setting:2' },
//         ],
//       },
//       {
//         type: 'group',
//         label: 'Item 2',
//         children: [
//           { label: 'Option 3', key: 'setting:3' },
//           { label: 'Option 4', key: 'setting:4' },
//         ],
//       },
//     ],
//   },
//   {
//     key: 'alipay',
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//   },
// ];

// const App: React.FC = () => {
//   const [current, setCurrent] = useState('mail');

//   const onClick: MenuProps['onClick'] = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };

//   return(

//     <ConfigProvider
//   theme={{
//     token: {
//       fontSize:8
//     },
//   }}
// >
//   <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
  
// </ConfigProvider>
  

// )};

// export default App;
