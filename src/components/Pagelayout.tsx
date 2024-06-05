import React, { useState } from "react";
import { ConfigProvider, Flex, Image, Layout, List, Menu } from "antd";
import { Col, Row } from "antd";
import type { MenuProps } from "antd";
import logo from "../images/logo2.jpg";
import mylogo from "../images/logo.png";
import home from "../images/home.jpeg";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Carousel } from "antd";
import CarouselComponent from "./CarouselComponent";
import { Card, Typography } from "antd";

const { Meta } = Card;

const { Header, Footer, Sider, Content } = Layout;

const carasolStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const headerStyle: React.CSSProperties = {
  // textAlign: 'center',
  // color: '#fff',
  // height: 64,
  // paddingInline: 48,
  // lineHeight: '64px',
  backgroundColor: "#4096ff",
  position: "sticky",
  top: 0,
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  //   paddingInline: "100px",
  // color: '#fff',
  backgroundColor: "white",
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
  paddingInline: 100,
  backgroundColor: "#f0f3fa",
};

const layoutStyle = {
  // borderRadius: 8,
  // overflow: 'hidden',
  // width: 'calc(50% - 8px)',
  // maxWidth: 'calc(50% - 8px)',
};

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Navigation One",
    key: "mail",
  },
  {
    label: "Navigation Two",
    key: "app",
  },
  {
    label: "Navigation Three",
    key: "three",
  },
  {
    label: "Navigation Four",
    key: "four",
  },
  {
    label: "Navigation Five",
    key: "five",
  },
];

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const data1 = [
  "Contact Us",
  "Frequently Asked Questions",
  "Track Order",
  "Loyalty Program",
  "Promotions Policy",
  "Shipping & Returns",
  "Privacy Policy",
  "Private Label",
  "Wholesale Benefits",
  "Wholesale Login",
];

const data2 = [
  "Our Story",
  "10% For Wellness",
  "B Corp",
  "Handcrafted",
  "Read Our Blog",
  "In the News",
  "Press Center",
];

const data3 = [
  "About Tea",
  "The Leaf",
  "How To Brew",
  "Cold Brewing",
  "Loose vs Bags",
  "Tea Traditions",
  "Health Benefits",
  "Tea Recommendations",
];

const Pagelayout: React.FC = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Flex gap="middle" wrap>
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
            background: "white",
            lineHeight: 5,
            alignContent: "end",
          }}
        >
          <Row>
            <Col span={12}>
              <div style={{ display: "inline-flex" }}>
                <img
                  src={logo}
                  height="64"
                  alt="logo"
                  style={{ paddingTop: 5 }}
                ></img>
                {/* <div style={{paddingTop: 10}}>
                  <Input
                    style={{
                      height: "30px",
                      paddingTop: 20,
                      textAlign: 'center'
                    }}
                    size="small"
                    placeholder="large size"
                    prefix={<SearchOutlined />}
                  />
                </div> */}
              </div>
            </Col>
            <Col span={12}>
              <div style={{ float: "right" }}>
                <ConfigProvider
                  theme={{
                    token: {
                      fontSize: 12,
                    },
                  }}
                >
                  <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={items}
                  ></Menu>
                </ConfigProvider>
              </div>
            </Col>
          </Row>
        </Header>
        {/* <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' items={items}></Menu> */}
        <Content style={contentStyle}>
          <Image
            src={home}
            preview={false}
            style={{ paddingTop: 10, paddingInline: 100, height: "600px" }}
          ></Image>

          <div>
            <p>
              Welcome to Ocha No Umi, your gateway to the finest tea blends from
              Bangladesh. We are dedicated to bringing you an exceptional tea
              experience, crafted with passion and a commitment to quality.
              Discover our range of exquisite teas that embody the rich flavors
              and traditions of our homeland.
            </p>
          </div>

          <Row
            gutter={16}
            style={{ paddingBottom: 20, paddingInline: "100px" }}
          >
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={home}
                    // preview={false}
                    style={{
                      //   paddingTop: 10,
                      //   paddingInline: 100,
                      height: 300,
                    }}
                  ></Image>
                }
              >
                <Meta title="Ucha No Umi" description="220$" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={home}
                    // preview={false}
                    style={{
                      //   paddingTop: 10,
                      //   paddingInline: 100,
                      height: 300,
                    }}
                  ></Image>
                }
              >
                <Meta title="Ucha No Umi" description="220$" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={home}
                    // preview={false}
                    style={{
                      //   paddingTop: 10,
                      //   paddingInline: 100,
                      height: 300,
                    }}
                  ></Image>
                }
              >
                <Meta title="Ucha No Umi" description="220$" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={home}
                    // preview={false}
                    style={{
                      //   paddingTop: 10,
                      //   paddingInline: 100,
                      height: 300,
                    }}
                  ></Image>
                }
              >
                <Meta title="Ucha No Umi" description="220$" />
              </Card>
            </Col>
          </Row>
          <Row
            gutter={16}
            style={{ paddingInline: "100px", paddingBottom: 20 }}
          >
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={home}
                    // preview={false}
                    style={{
                      //   paddingTop: 10,
                      //   paddingInline: 100,
                      height: 300,
                    }}
                  ></Image>
                }
              >
                <Meta title="Ucha No Umi" description="220$" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={home}
                    // preview={false}
                    style={{
                      //   paddingTop: 10,
                      //   paddingInline: 100,
                      height: 300,
                    }}
                  ></Image>
                }
              >
                <Meta title="Ucha No Umi" description="220$" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={home}
                    // preview={false}
                    style={{
                      //   paddingTop: 10,
                      //   paddingInline: 100,
                      height: 300,
                    }}
                  ></Image>
                }
              >
                <Meta title="Ucha No Umi" description="220$" />
              </Card>
            </Col>
            <Col span={6}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <Image
                    src={home}
                    // preview={false}
                    style={{
                      //   paddingTop: 10,
                      //   paddingInline: 100,
                      height: 300,
                    }}
                  ></Image>
                }
              >
                <Meta title="Ucha No Umi" description="220$" />
              </Card>
            </Col>
          </Row>

          <div style={{ background: "#edf5ec" }}>
            <Row>
              <Col span={12}>
                <p
                  style={{
                    display: "flex",
                    lineHeight: 2,
                    padding: 100,
                    textAlign: "justify",
                  }}
                >
                  We're with you through every sip of the day. From bold
                  beginnings to soothing sunsets, our fresh, small-batch teas
                  are here to match every moment with authenticity and care. Our
                  innovative Steepware makes premium tea an everyday luxury,
                  reminding you that no matter what today holds, you've got
                  this. Embrace the fullness of life with us. Drink in the best
                  of today.
                </p>
              </Col>
              <Col span={12}>
                <Image
                  src={home}
                  preview={false}
                  style={{
                    paddingTop: 50,
                    paddingBottom: 50,
                    borderTopLeftRadius: 100,
                    borderEndEndRadius: 100,
                    //   paddingInline: 100,
                    height: 500,
                  }}
                ></Image>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={footerStyle}>
          <div>
            {/* <Row>
              <Col span={24} style={{textAlign: 'center'}}>Umi No Ocha</Col>
            </Row> */}
            <Row>
              <Col span={18} push={6}>
              <Row>
                  <Col span={8}>
                    <h3>Customer Care</h3>
                    <List
                      //   header={<div>Header</div>}
                      //   footer={<div>Footer</div>}
                      //   bordered
                      split={false}
                      dataSource={data1}
                      renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                  </Col>
                  <Col span={8}>
                    <h3>Our Story</h3>
                    <List
                      //   header={<div>Header</div>}
                      //   footer={<div>Footer</div>}
                      //   bordered
                      split={false}
                      dataSource={data2}
                      renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                  </Col>
                  <Col span={8}>
                    <h3>About Tea</h3>
                    <List
                      //   header={<div>Header</div>}
                      //   footer={<div>Footer</div>}
                      //   bordered
                      split={false}
                      dataSource={data3}
                      renderItem={(item) => <List.Item>{item}</List.Item>}
                    />
                  </Col>
                </Row>
              </Col>

              <Col span={6} pull={18}>
              <img
                  src={mylogo}
                  height="64"
                  alt="logo"
                  style={{ paddingTop: 5, height:300 }}
                ></img>
              </Col>
            </Row>
          </div>
        </Footer>
      </Layout>
    </Flex>

    //     <ConfigProvider
    //   theme={{
    //     token: {
    //         fontSize:8
    //     },
    //   }}
    // >
    //  <Menu onClick={onClick} style={{}} selectedKeys={[current]} mode='horizontal' items={items}></Menu>

    // </ConfigProvider>
    //     // <Menu onClick={onClick} style={{}} selectedKeys={[current]} mode='horizontal' items={items}></Menu>
  );
};

export default Pagelayout;
