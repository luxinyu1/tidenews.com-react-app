import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import { Helmet } from 'react-helmet';
import AdminSider from '../../components/admin-sider/admin-sider';
import AdminWordcloud from '../../components/admin-wordcloud/admin-wordcloud';

const { Content, Footer } = Layout;

function Admin (props) {
    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>潮汐-一个AI新闻网站</title>
        <link rel='icon' href='./favicon.ico'/>
        </Helmet>
        <Layout style={{ minHeight: '100vh' }}>
            <AdminSider props={props} />
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>admin</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                    <AdminWordcloud />
                </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
        </>
    );
}
export default Admin;