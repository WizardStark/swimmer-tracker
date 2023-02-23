import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/router';

const { Header, Content, Footer } = Layout;
const pageList = {
  Home : {path : '/', forAll : true},
  Overview : {path : '/Overview', forAll : true},
  Statistics : {path : '/Statistics', forAll : true},
  Kindertjies : {path : '/Kindertjies', forAll : false}
}

const coach = true
function PageLayout({children}){
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const router = useRouter()
  const aktualkies = Object.keys(pageList).filter((page) => {
    return pageList[page].forAll || coach
  });  
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[router.asPath.substring(1)]}
          items={aktualkies.map((val) => {
            return {
              key: pageList[val].path,
              label: val,
            };
          })}
          onSelect={(item)=>{
            router.push(item.key)
          }}
        />
      </Header >
      <Content
        style={{
          padding: '0 50px',
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
          textAlign: 'center',
        }}
      >
        Piet ©2023 Jouma
      </Footer>
    </Layout>
  )
}

export default PageLayout