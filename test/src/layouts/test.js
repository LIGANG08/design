/**
 * 2017-11.27 ligang
 */

import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'dva';
import { ContainerQuery } from 'react-container-query';
import classNames from 'classnames';
import styles from './BasicLayout.less';

const { Header, Sider, Content, Footer } = Layout;

const query = {
  'screen-xs': {
    maxWidth: 575,
  },
  'screen-sm': {
    minWidth: 576,
    maxWidth: 767,
  },
  'screen-md': {
    minWidth: 768,
    maxWidth: 991,
  },
  'screen-lg': {
    minWidth: 992,
    maxWidth: 1199,
  },
  'screen-xl': {
    minWidth: 1200,
  },
};

// const SubMenu = Menu.SubMenu;
const { SubMenu } = Menu;

class test extends React.Component {


  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const layout = (
      <Layout>
        <Sider
          className={styles.left}
          // onOpenChange={this.onOpenChange}
          // style={{ width: 500 }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>
            <a href="#/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1 style={{ color: 'red' }}>Ant Design Pro</h1>
            </a>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            style={{ marginTop: '120' }}
          >
            <SubMenu key="sub3" title={<span><Icon type="exception" /><span>列表页</span></span>}>
              <Menu.Item key="7">查询表格</Menu.Item>
              <Menu.Item key="8">标准列表</Menu.Item>
              <Menu.Item key="9">卡片列表</Menu.Item>
              <Menu.Item key="10">搜索列表(项目)</Menu.Item>
              <Menu.Item key="11">搜索列表(应用)</Menu.Item>
              <Menu.Item key="12">搜索列表(文章)</Menu.Item>
            </SubMenu>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.right}>
          <Header className={styles.header}>header
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
          </Header>
          <Content className={styles.content}>main content</Content>
          <Footer className={styles.footer}>footer</Footer>
        </Layout>
      </Layout>
    );
    return (
      <ContainerQuery query={query}>
        {params => <div className={classNames(params)}>{layout}</div>}
      </ContainerQuery>
    );
  }
}
export default connect()(test);
