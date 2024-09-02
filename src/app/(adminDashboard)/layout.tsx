"use client";
import { ReactNode, useState } from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.png";
import { links } from "@/utils/links";
import Navbar from "../../components/Navbar";
import { BiLogOutCircle } from "react-icons/bi";

const { Header, Sider, Content } = Layout;

const layout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Sider
        width={320}
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          paddingInline: `${collapsed ? "10px" : "26px"}`,
          backgroundColor: "#F8FAFC",
          maxHeight: "100vh",
          overflow: "auto",
        }}
      >
        <div className="demo-logo-vertical" />
        {/* logo  */}
        <Link href={"/"}>
          <Image
            src={logo}
            alt="logo_Image"
            style={{
              marginTop: "40px",
              marginBottom: "40px",
            }}
          />
        </Link>
        <Menu
          theme="light"
          defaultSelectedKeys={["dashboard"]}
          mode="inline"
          className="sidebar-menu"
          items={links.map((link) => {
            let menuItem;
            if (link.key !== "logout") {
              !Array.isArray(link)
                ? (menuItem = {
                    key: link.key,
                    icon: (
                      <Image
                        src={link.icon}
                        alt={link.label}
                        className={`${
                          collapsed ? "w-full mr-0" : "w-autor h-auto m-2"
                        }`}
                      />
                    ),
                    label: (
                      <Link href={`/${link.key}`} className={`text-lg`}>
                        {link.label}
                      </Link>
                    ),
                  })
                : (menuItem = {
                    key: link[0].key,
                    label: <p className="text-lg text-white">{link[0].label}</p>,
                    icon: (
                      <Image
                        src={link[0].icon}
                        alt={link[0].label}
                        className={`${
                          collapsed ? "w-full mr-0" : "w-auto h-auto mr-2"
                        }`}
                      />
                    ),
                    children: link.slice(1, link.length).map((subLink) => {
                      let subMenuItem;
                      subMenuItem = {
                        key: subLink.key,
                        icon: (
                          <Image
                            src={subLink.icon}
                            alt={subLink.label}
                            className={`${
                              collapsed ? "w-8 h-8 mr-0" : "w-auto h-auto mr-2"
                            } bg-blend-soft-light`}
                          />
                        ),
                        label: (
                          <Link
                            href={`/${subLink.key}`}
                            className="text-lg"
                            style={{ color: "white" }}
                          >
                            {subLink.label}
                          </Link>
                        ),
                      };

                      return subMenuItem;
                    }),
                  });
            } else {
              menuItem = {
                key: "logout",
                icon: (
                  <BiLogOutCircle  size={24}/>
                ),
                label: (
                  <Link href="" className="w-full">
                    <p className="text-lg">Logout</p>
                  </Link>
                ),
              };
            }
            return menuItem;
          })}
        />
      </Sider>
      <Layout style={{}}>
        <Header
          style={{
            padding: 0,
            backgroundColor: "#f8fafc",
            height: "80px",
            display: "flex",
            alignItems: "center",
            paddingInline: "0",
          }}
        >
          <Navbar collapsed={collapsed} setCollapsed={setCollapsed}></Navbar>
        </Header>
        <Content
          style={{
            backgroundColor: "#4DB5AD",
            padding: "21px 32px",
            minHeight: 280,
            borderRadius: borderRadiusLG,
            overflow: "auto",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default layout;
