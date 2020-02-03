import React from 'react';
import { Layout, Breadcrumb, Row, Col } from 'antd';
import { Helmet } from 'react-helmet';
import AdminSider from '../../../components/admin-sider/admin-sider';

const { Content, Footer } = Layout;

function Review (props) {
    return (
        <>
        <Helmet>
        <meta charSet="utf-8" />
        <title>潮汐-一个AI新闻网站</title>
        <link rel='icon' href='./favicon.ico'/>
        </Helmet>
        <Layout style={{ minHeight: '100vh' }}>
            <AdminSider props={props} openKeys={['content']} selectedKeys={['review']} />
            <Layout>
                <Content style={{ margin: '0 16px' }}>
                <Breadcrumb separator=">" style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>admin</Breadcrumb.Item>
                    <Breadcrumb.Item>content</Breadcrumb.Item>
                    <Breadcrumb.Item>review</Breadcrumb.Item>
                </Breadcrumb>
                <Row style={{ minHeight: 360 }} type="flex" justify="start">
                    <Col xs={0} sm={0} md={24} lg={16} xl={12} xxl={12} style={{ marginRight:5 }}>
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={6} style={{ marginLeft:5 }}>
                    </Col>
                </Row>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
        </>
    );
}

export default Review;