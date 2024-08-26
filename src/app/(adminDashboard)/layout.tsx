"use client";

import { ReactNode, useState } from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import { links } from "@/utils/links";
import Navbar from "./components/Navbar";

const { Header, Sider, Content } = Layout;



const layout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider width={350} theme="light" trigger={null} collapsible collapsed={collapsed}
      style={{
        paddingInline: `${collapsed? "10px": "26px"}`,
        backgroundColor: "#F8FAFC",
        maxHeight: "100vh",
        overflow: "auto",

      }}>
        <div className="demo-logo-vertical" />
        {/* logo  */}
        <Link href={"/"}>
          <Image src={logo} alt="logo_Image" style={{
            marginTop: "79px",
            marginBottom: "40px"
          }}/>
        </Link>
        <Menu
          theme="light"
          defaultSelectedKeys={["1"]}
          mode="inline"
          className="sidebar-menu"
          items={links?.map((link)=>{
            let manuItem;

            manuItem = {
                key: link.key,
                icon: <Image src={link.icon} alt={link.label}></Image>,
                label: <Link href={link.key}>{link.label}</Link>
                
            }
            return manuItem

          })}
        />
      </Sider>
      <Layout style={{backgroundColor: "#4DB5AD"}}>
        <Header style={{
             padding: 0, 
             backgroundColor: "#f8fafc",
             height: "80px",
             display: "flex",
             alignItems: "center",
             paddingInline: "0"
              }}>
            <Navbar collapsed={collapsed} setCollapsed={setCollapsed}></Navbar>
          {/* <Button
            type="text"
            icon={collapsed ? <MenuOutlined />: <MenuOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          /> */}
        </Header>
        <Content
          style={{
            margin: "21px 32px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default layout;
