import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useRouter } from "next/router";

const { Header, Content, Footer } = Layout;
const pageList = {
  Home: { path: "/", forAll: true },
  Overview: { path: "/Overview", forAll: false },
  Statistics: { path: "/Statistics", forAll: true },
  Test: { path: "/Test", forAll: false },
};

const coach = true;
function PageLayout({ children }) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter();
  const filteredKeys = Object.keys(pageList).filter((page) => {
    return pageList[page].forAll || coach;
  });
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[router.asPath.substring(1)]}
          items={filteredKeys.map((val) => {
            return {
              key: pageList[val].path,
              label: val,
            };
          })}
          onSelect={(item) => {
            router.push(item.key);
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        ©2023
      </Footer>
    </Layout>
  );
}

export default PageLayout;
