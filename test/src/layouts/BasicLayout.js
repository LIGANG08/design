/**
 * ligang
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

class BasicLayout extends React.Component {


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
          style={{ width: '500px' }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}>
            <a href="#/">
              <img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
              <h1>Ant Design Pro</h1>
            </a>
          </div>
          <Menu
            theme="dark"
            mode="inline"
            style={{ marginTop: '10px', background: 'rgb(14, 114, 84)' }}
          >
            <SubMenu title={<span><Icon type="clock-circle-o" /><span>Dashboard</span></span>}>
              <Menu.Item key="1">分析页</Menu.Item>
              <Menu.Item key="2">监控页</Menu.Item>
              <Menu.Item key="3">工作台</Menu.Item>
              {/* <Menu.Item key="4">Option 4</Menu.Item> */}
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="edit" /><span>表单页</span></span>}>
              <Menu.Item key="4" Link to="/www.baidu.com">基础表单</Menu.Item>
              <Menu.Item key="5">分步表单</Menu.Item>
              <Menu.Item key="6">高级表单</Menu.Item>
              {/* <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="8">查询表格</Menu.Item>
                <Menu.Item key="9">标准列表</Menu.Item>
                <Menu.Item key="8">卡片列表</Menu.Item>
                <Menu.Item key="9">搜索列表(项目)</Menu.Item>
                <Menu.Item key="8">搜索列表(应用)</Menu.Item>
                <Menu.Item key="9">搜索列表(文章)</Menu.Item>
              </SubMenu> */}
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="exception" /><span>列表页</span></span>}>
              <Menu.Item key="7">查询表格</Menu.Item>
              <Menu.Item key="8">标准列表</Menu.Item>
              <Menu.Item key="9">卡片列表</Menu.Item>
              <Menu.Item key="10">搜索列表(项目)</Menu.Item>
              <Menu.Item key="11">搜索列表(应用)</Menu.Item>
              <Menu.Item key="12">搜索列表(文章)</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="layout" /><span>详情页</span></span>}>
              <Menu.Item key="9">基础详情</Menu.Item>
              <Menu.Item key="10">高级详情</Menu.Item>
              {/* <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item> */}
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="check-circle-o" /><span>结果</span></span>}>
              <Menu.Item key="9">成功</Menu.Item>
              <Menu.Item key="10">失败</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title={<span><Icon type="exclamation-circle-o" /><span>异常</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
            <Menu.Item key="9"><Icon type="file-text" /><span><a href="https://www.baidu.com/">使用文档</a></span></Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.right}>
          <Header className={styles.header}>header
          <Icon
            className={styles.trigger}
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
export default connect()(BasicLayout);
