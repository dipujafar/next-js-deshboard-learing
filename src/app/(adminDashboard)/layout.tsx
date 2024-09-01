"use client";

import { ReactNode, useState } from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import { links } from "@/utils/links";
import Navbar from "../../components/Navbar";

const { Header, Sider, Content } = Layout;

const layout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Sider width={320} theme="light" trigger={null} collapsible collapsed={collapsed}
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
          defaultSelectedKeys={["dashboard"]}
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
      <Layout style={{}}>
        <Header style={{
             padding: 0, 
             backgroundColor: "#f8fafc",
             height: "80px",
             display: "flex",
             alignItems: "center",
             paddingInline: "0"
              }}>
            <Navbar collapsed={collapsed} setCollapsed={setCollapsed}></Navbar>
        </Header>
        <Content
          style={{
            backgroundColor: "#4DB5AD",
            padding: "21px 32px",
            minHeight: 280,
            borderRadius: borderRadiusLG,
            overflow: "auto"
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default layout;
