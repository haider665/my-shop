import React from 'react';
import { Flex, Layout, Menu } from 'antd';
import { Col, Row } from 'antd';
import type { MenuProps } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    // textAlign: 'center',
    // color: '#fff',
    // height: 64,
    // paddingInline: 48,
    // lineHeight: '64px',
    backgroundColor: '#4096ff',
    position: 'sticky',
    top: 0
};

const contentStyle: React.CSSProperties = {
    // textAlign: 'center',
    // minHeight: 120,
    // lineHeight: '120px',
    // color: '#fff',
    // backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    // textAlign: 'center',
    // lineHeight: '120px',
    // color: '#fff',
    // backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
    // textAlign: 'center',
    // color: '#fff',
    // backgroundColor: '#4096ff',
};

const layoutStyle = {
    // borderRadius: 8,
    // overflow: 'hidden',
    // width: 'calc(50% - 8px)',
    // maxWidth: 'calc(50% - 8px)',
};

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [];

const Pagelayout: React.FC = () => (

    <Flex gap="middle" wrap>
        <Layout style={layoutStyle}>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1000, background: 'white' }}>Header</Header>
            <Content style={contentStyle}>
                <Row>
                    <Col span={12} style={{background:'blue'}}></Col>
                    <Col span={12} style={{background: 'green'}}>
                        <Menu></Menu>
                    </Col>
                </Row>
            </Content> 
            <Footer style={footerStyle}>Footer</Footer>
        </Layout>
    </Flex>
    
);

export default Pagelayout;